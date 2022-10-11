import express, {Request,Response} from 'express';
import {getAllRooms} from '../controllers/rooms.controller';


const router = express.Router();

router.route('/api/rooms/all').get(getAllRooms);

export default router;