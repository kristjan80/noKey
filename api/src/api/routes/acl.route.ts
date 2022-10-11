import express, {Request,Response} from 'express';
import {getAccessList} from '../controllers/acl.controller';


const router = express.Router();

router.route('/api/acl/all').get(getAccessList);