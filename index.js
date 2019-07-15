const express = require('express')
const app = express()
const SERVER_PORT = 4000
const users =require('./userData')
const userCtrl = require('./userController')
const middleware = require('./middleware')



app.use(express.json())
app.get('/api/users', userCtrl.getAllUsers)
app.get('/api/users', userCtrl.getOneUser)
app.post('/api/users', middleware,addId,userCtrl.addUser)
app.put('./api/useers/:id', userCtrl.updateUser)








app.use((req,res,next)=> {
    // checks if firstname even exists
    if(req.body.first_name){
        req.body.id = id
        id++
    }
    next()
}) 




app.use((req,res,next) => {
    // console.log('Panda')
    next()
})


app.get('/api/users',(req,res)=>{
 res.status(200).send(users)
})

//filter method to acquire specific user
app.get( '/api/user', (req,res) => {
    const user = users.filter( obj => obj.id === +id )
    res.status(200).send(user)
   })
app.post( 
    '/api/users',
     (req,res,next) => {
        if(req.body.first_name){
            req.body.id = id
            id++
        }
        next()
    },
    (req, res)  => {
        // console.log(req.body)
    users.push(req.body)
    res.status(201).send(users)
})
app.delete('./api/users/:id', userCtrl.deleteUser)


app.listen(SERVER_PORT,() => console.log(`${SERVER_PORT} COPY THAT!`))