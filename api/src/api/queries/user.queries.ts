export const UserQueries = {
    GetAllUsers: 'SELECT firstname,lastname,email FROM nokey.users',
    GetUserById: 'SELECT firstname,lastname,email FROM nokey.users WHERE id=?',
    RemoveUserById: 'DELETE FROM nokey.users WHERE id=?',
    CreateUser: 'INSERT INTO nokey.users (firstname,lastname,email,phash,salt) VALUES(?,?,?,?,?)',
    UpdateUserById: 'UPDATE nokey.users SET firstname=?, lastname=?, email=? WHERE id=?'
}