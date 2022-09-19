import { Request, RequestHandler, Response } from 'express';
import { execute } from '../../utils/mysql.connector';

import {UserQueries} from '../queries/user.queries';
import {IUser} from '../models/user.model';

export const getAllUsers = async () => {
    return execute<IUser[]>(UserQueries.GetAllUsers, []);
};

export const getUserById = async (id: IUser['id']) => {
    return execute<IUser[]>(UserQueries.GetUserById, [id]);
};

export const removeUserById = async (id: IUser['id']) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.RemoveUserById, [id]);
    return result.affectedRows > 0;
  };

