# noKey API backend
## Setup
Install all the dependencies
```console
foo@bar:~/nokey/api$ sudo npm install package.json
```
Rename the .env.local file and add your database parameters
#### NB! Make sure to user MySQL user with authenticon plugin 'mysql_native_password'
```console
foo@bar:~/nokey/api$ sudo mv .env.local .env
```

Compile the typescript code
```console
foo@bar:~/nokey/api$ sudo npx tsc
```
Import the database using the files in the **scripts** directory. Currently only MySQL is supported


Run the service
```console
foo@bar:~/nokey/api$ npm start
```

## Currently working endpoints
GET - /api/users/all

GET - /api/users/:id

DELETE - /api/users/delete/:id
