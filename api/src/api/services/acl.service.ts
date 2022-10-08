import { execute } from '../../utils/mysql.connector';

import {ACLQueries} from '../queries/acl.queries';
import {IACL} from '../models/accesslist.model';

export const getAccessList = async () => {
    return execute<IACL[]>(ACLQueries.GetAccessList, []);
};
