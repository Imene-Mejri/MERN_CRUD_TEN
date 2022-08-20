const express =require('express');
const { AddUser, findOneUser, UpdateUser, DeleteUser, findAllUser } = require('../contollers/users.controllers');
const router = express.Router();




/* add user*/
router.post('/users',AddUser)


/* find all users */
router.get('/users',findAllUser)

/* find one user*/
router.get('/users/:id',findOneUser)


/* update user*/
router.put('/users/:id',UpdateUser)


/* delete user*/
router.delete('/users/:id',DeleteUser)

module.exports= router;