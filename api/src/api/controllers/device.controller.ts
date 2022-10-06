import {Request,RequestHandler,Response} from 'express';
import * as DeviceService from './../services/device.service';

export const getAllDevices: RequestHandler = async(req:Request, res:Response) => {
    try {
        const rooms = await DeviceService.getAllDevices();
    
        res.status(200).json({rooms});
      } catch (error) {
        console.error('[device.controller][getAllDevices][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching information about devices'
        });
      }
};