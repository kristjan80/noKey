# noKey API backend
## Setup
Install all the dependencies
```console
foo@bar:~/nokey/api$ sudo npm install package.json
```
Rename the .env.local file and add your database parameters
#### NB! Make sure to create a MySQL user with authenticon plugin 'mysql_native_password'
```console
foo@bar:~/nokey/api$ sudo mv .env.local .env
```

Set up the environment variables
```console
foo@bar:~/nokey/api$ set -a
foo@bar:~/nokey/api$ source .env
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
## ENDPOINT DOCS WILL BE MOVED SOON AND LINKED HERE
GET - /api/users/all

GET - /api/users/:id

DELETE - /api/users/delete/:id

PATCH(UPDATE) - /api/users/udpate/:id and **firstname** , **lastname** and **email** in form-encoded form

POST(CREATE) -  /api/users/create and **firstname** , **lastname** , **email** , **password** and **hash** in form-encoded form

Later on password will be encrypted in the backend
