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

export const createUser = async (user: IUser) => {
    const result = await execute <{affectedRows: number}>(UserQueries.CreateUser, [
        user.firstname, user.lastname,
        user.email, user.phash, user.salt      
    ]);
};

export const updateUserById = async (user: IUser, id:IUser['id']) => {
    const result = await execute <{affectedRows: number}>(UserQueries.UpdateUserById, [
        user.firstname, user.lastname,
        user.email, id        
    ]);
    return result.affectedRows > 0;
};


