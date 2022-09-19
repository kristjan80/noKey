import express, {Request,Response} from 'express';
import { getAllUsers, getUserById, removeUserById } from '../controllers/user.controller';


const router = express.Router();

router.route('/api/users/all').get(getAllUsers);
router.route('/api/users/:id').get(getUserById);
router.route('/api/users/remove/:id').delete(removeUserById);
export default router;