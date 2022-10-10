import express, {Request,Response} from 'express';
import cors from 'cors';
import compression from 'compression'
//import { generateToken } from './api/utils/jwt.utils';
import userRoutes from './api/routes/user.routes';
import deviceRoutes from './api/routes/device.route';
import roomRoutes from './api/routes/room.routes';
import * as MySQLConnector from './utils/mysql.connector';

//import { validateId } from './middleware/validator.middleware'; 


const app = express();
const port = 3000;

app.set('trust proxy', true);

MySQLConnector.init();

app.use(compression());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(validateId(req,res,next));
app.use('/', userRoutes);
app.use('/', deviceRoutes);
app.use('/', roomRoutes);
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});