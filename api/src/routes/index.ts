
import express, { Request, Response, Express } from 'express';

var router = express.Router();

router.get('/', function(req:Request, res:Response, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;