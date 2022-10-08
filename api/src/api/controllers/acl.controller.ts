import {Request,RequestHandler,Response} from 'express';
import * as ACLService from './../services/acl.service';

export const getAccessList: RequestHandler = async(req:Request, res:Response) => {
    try {
        const rooms = await ACLService.getAccessList();
    
        res.status(200).json({rooms});
      } catch (error) {
        console.error('[acl.controller][getAccessList][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching information about groups'
        });
      }
};