import { execute } from '../../utils/mysql.connector';

import {RoomQueries} from '../queries/room.queries';
import {IRoom} from '../models/rooms.model';

export const getAllRooms = async () => {
    return execute<IRoom[]>(RoomQueries.GetAllRooms, []);
};
