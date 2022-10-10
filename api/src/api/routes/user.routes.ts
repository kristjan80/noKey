import express, {Request,Response} from 'express';
import { getAllUsers, getUserById, removeUserById, createUser, updateUserById } from '../controllers/user.controller';
import { myLogger } from '../../middleware/logger.middleware';
import { userIdValidator, userUpdateValidator, userAddValidator} from '../../middleware/validator.middleware';

const router = express.Router();

// Middlewares for user route input validation
router.use('/api/users/all', myLogger);
router.route('/api/users/all').get(getAllUsers);

// Middleware stacks. Firt validate then if input seems good pass data to controller for backend DB requests.
router.route('/api/users/:id').get(userIdValidator,getUserById);
router.route('/api/users/remove/:id').delete(userIdValidator,removeUserById);

router.route('/api/users/create').post(userIdValidator, userAddValidator, createUser);

// https://www.baeldung.com/http-put-patch-difference-spring
// We are only updating name and email here so patch method is prefered. PUT is for full entity replacements
router.route('/api/users/update/:id').patch(userIdValidator,userUpdateValidator,updateUserById);
//router.route('/api/users/preset/').patch();
export default router;