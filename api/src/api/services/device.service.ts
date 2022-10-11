import { execute } from '../../utils/mysql.connector';

import {DeviceQueries} from '../queries/device.queries';
import {IDevice} from '../models/devices.model';

export const getAllDevices = async () => {
    return execute<IDevice[]>(DeviceQueries.GetAllDevices, []);
};
