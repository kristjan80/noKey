import express, {Request,Response} from 'express';
import { getAllUsers, getUserById, removeUserById, createUser, updateUserById } from '../controllers/user.controller';


const router = express.Router();

router.route('/api/users/all').get(getAllUsers);
router.route('/api/users/:id').get(getUserById);
router.route('/api/users/remove/:id').delete(removeUserById);
router.route('/api/users/create').post(createUser);
// https://www.baeldung.com/http-put-patch-difference-spring
// We are only updating name and email here so patch method is prefered. PUT is for full entity replacements
router.route('/api/users/update/:id').patch(updateUserById);
//router.route('/api/users/preset/').patch();
export default router;