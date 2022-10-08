import {Request,RequestHandler,Response} from 'express';
import * as QRService from './../services/qrcode.service';

export const getAllCodes: RequestHandler = async(req:Request, res:Response) => {
    try {
        const codes = await QRService.getAllCodes();
    
        res.status(200).json({codes});
      } catch (error) {
        console.error('[qr.controller][getAllCodes][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching QRCodes'
        });
      }
};