import { execute } from '../../utils/mysql.connector';

import {QRQueries} from '../queries/qrcode.queries';
import {IQR} from '../models/codes.model';

export const getAllCodes = async () => {
    return execute<IQR[]>(QRQueries.GetAllCodes, []);
};
