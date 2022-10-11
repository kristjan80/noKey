import { execute } from '../../utils/mysql.connector';

import {ACLHistoryQueries} from '../queries/aclhistory.queries';
import {IACLHistory} from '../models/accesshistory.model';

export const getACLHistory = async () => {
    return execute<IACLHistory[]>(ACLHistoryQueries.GetACLHistory, []);
};
