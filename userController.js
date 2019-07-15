


module.exports = {

    GetAllUsers: (('/api/users',(req,res)=>{
    res.status(200).send(users)
   })
}

getOneUser: app.get( '/api/user', (req,res) => {
    const user = users.filter( obj => obj.id === +req.query.id )
    res.status(200).send(user)
   })

addUser:  (req, res)  => {
    // console.log(req.body)
users.push(req.body)
res.status(201).send(users)

}

upDateUser: (req, res) => {
    console.log(req.params, req.body)
    const{id}=req.params
}

const index = users.findIndex(user => user.id === +id)  
const user = users.filter( obj => obj.id === +id )
if (!user.length ===1){
    return res,stattus(409).send('no user with that id  found')
}
deleteUser: (req,res,)=> {
    const {id} = req.params
    const index = users.findIndex (user => 
        user.id === +req.params.id)
        if ( index === -1){
            return res.status(418).send('User Not Found')
        }
   const deletedUser = users.splice(index, 1)
        res.status(200).send(deletedUser)
    )
}


