import {Request,RequestHandler,Response} from 'express';
import * as RoomsService from './../services/rooms.service';

export const getAllRooms: RequestHandler = async(req:Request, res:Response) => {
    try {
        const rooms = await RoomsService.getAllRooms();
    
        res.status(200).json({rooms});
      } catch (error) {
        console.error('[rooms.controller][getAllRooms][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching the rooms'
        });
      }
};