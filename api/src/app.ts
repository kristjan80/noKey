import express, {Request,Response} from 'express';
import cors from 'cors';
import compression from 'compression'
//import { generateToken } from './api/utils/jwt.utils';
import userRoutes from './api/routes/user.routes';
import * as MySQLConnector from './utils/mysql.connector';


const app = express();
const port = 3000;


MySQLConnector.init();

app.use(compression());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});