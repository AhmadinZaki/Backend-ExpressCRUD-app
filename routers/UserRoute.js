import express from 'express';
import { deleteModel } from 'mongoose';
import { deleteUser, getUser, getUserById, saveUser, updateUser} from "../contollers/UserController.js"
const router = express.Router();


router.get('/', getUser );
router.get('/:id', getUserById );
router.post('/', saveUser );
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);



export default router;