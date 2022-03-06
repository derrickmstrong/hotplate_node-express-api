import express from 'express';
import { createUser, deleteUser, getAllUsers, updateUser, userById } from '../controllers/users.js';

const router = express.Router();

// read all users
router.get('/',  getAllUsers)
 // create user
.post('/', createUser)
// read user by id
.get('/:id', userById)
// delete user
.delete('/:id', deleteUser)
// update user
.patch('/:id', updateUser);

 export default router;