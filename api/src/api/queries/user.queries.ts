import { removeUserById } from "../services/user.service";

export const UserQueries = {
    GetAllUsers : 'SELECT firstname,lastname,email FROM nokey.users',
    GetUserById : 'SELECT firstname,lastname,email FROM nokey.users WHERE id=?',
    RemoveUserById: 'DELETE FROM nokey.users WHERE id=?'
}