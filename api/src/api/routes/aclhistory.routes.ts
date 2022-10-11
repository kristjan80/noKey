import express, {Request,Response} from 'express';
import {getACLHistory} from '../controllers/aclhistory.controller';


const router = express.Router();

router.route('/api/acl/history/all').get(getACLHistory);