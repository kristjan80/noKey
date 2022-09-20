import {Request,RequestHandler,Response} from 'express';
import {IUser} from './../models/user.model';
import * as UserService from './../services/user.service';

export const getAllUsers: RequestHandler = async(req:Request, res:Response) => {
    try {
        const users = await UserService.getAllUsers();
    
        res.status(200).json({users});
      } catch (error) {
        console.error('[user.controller][getAllUsers][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching users'
        });
      }
};

export const getUserById: RequestHandler = async(req:Request, res:Response) => {
    try {
        const user = await UserService.getUserById(parseInt(req.params.id));
    
        res.status(200).json({
          user
        });
      } catch (error) {
        console.error('[user.controller][getUserById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error when fetching user'
        });
      }
};

export const removeUserById: RequestHandler = async (req:Request, res:Response) => {
    try {
        const result = await UserService.removeUserById(parseInt(req.params.id));
    
        res.status(200).json({result});
      } catch (error) {
        console.error('[user.controller][removeUserById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
          message: 'There was an error while trying to delete the user'
        });
      }
}

export const createUser: RequestHandler = async (req:Request, res:Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(200).json({result});
  } catch (error) {
    console.error('[user.controller][createUser][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error while trying to delete the user'
    });
  }
}

export const updateUserById:RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateUserById(req.body, parseInt(req.params.id));

    res.status(200).json({ result });
  } catch (error) {
    console.error('[user.controller][updateUserById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    res.status(500).json({
      message: 'There was an error while trying to update the user'
    });
  }
}
