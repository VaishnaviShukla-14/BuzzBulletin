const express = require('express')
const route = express.Router()
const {addUser ,loginUser, showUser, deleteUser, updateUser, searchUser, showDeletedUsers}  = require("../controlers/user.controler")


route.post('/user',addUser)
route.post('/login', loginUser)
route.get('/showUser',showUser)
route.delete('/delete', deleteUser);
route.put('/update/:id', updateUser);
route.get('/search/:alphabet',searchUser);
route.get('/showDeletedUsers', showDeletedUsers);


module.exports = route;