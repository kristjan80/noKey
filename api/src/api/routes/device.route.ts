import express, {Request,Response} from 'express';
import {getAllDevices} from '../controllers/device.controller';


const router = express.Router();

router.route('/api/devices/all').get(getAllDevices);