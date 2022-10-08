import express, {Request,Response} from 'express';
import {getAllCodes} from '../controllers/qrcode.service';


const router = express.Router();

router.route('/api/qr/all').get(getAllCodes);