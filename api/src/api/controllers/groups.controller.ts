import {Request,RequestHandler,Response} from 'express';
import * as GroupService from './../services/groups.service';

export const getAllGroups: RequestHandler = async(req:Request, res:Response) => {
    try {
        const groups = await GroupService.getAllGroups();
    
        res.status(200).json({groups});
      } catch (error) {
        console.error('[groups.controller][getAllGroups][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching information about groups'
        });
      }
};