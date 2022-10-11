import { execute } from '../../utils/mysql.connector';

import {GroupQueries} from '../queries/groups.queries';
import {IGroup} from '../models/groups.model';

export const getAllGroups = async () => {
    return execute<IGroup[]>(GroupQueries.GetAllGroups, []);
};
