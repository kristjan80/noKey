import express, {Request,Response} from 'express';
import {getAllGroups} from '../controllers/groups.controller';


const router = express.Router();

router.route('/api/groups/all').get(getAllGroups);