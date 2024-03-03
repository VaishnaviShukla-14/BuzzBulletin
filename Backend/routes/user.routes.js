const express = require('express')
const route = express.Router()
const {addUser ,loginUser, showUser, deleteUser, updateUser, searchUser}  = require("../controlers/user.controler")


route.post('/user',addUser)
route.post('/login', loginUser)
route.get('/showUser',showUser)
route.delete('/delete', deleteUser);
route.put('/update', updateUser);
route.get('/search/:alphabet',searchUser);



module.exports = route;