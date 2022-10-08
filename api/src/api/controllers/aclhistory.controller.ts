import {Request,RequestHandler,Response} from 'express';
import * as ACLHistory from './../services/aclhistory.service';

export const getACLHistory: RequestHandler = async(req:Request, res:Response) => {
    try {
        const rooms = await ACLHistory.getACLHistory();
    
        res.status(200).json({rooms});
      } catch (error) {
        console.error('[aclhistory.controller][getaccesshistory][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching information access history'
        });
      }
};