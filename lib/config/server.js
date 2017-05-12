import express from 'express';
import middleware from '../app/middlewares/combineMiddlewares';
import errorHandler from '../app/middlewares/errorHandler';
import winston from 'winston';
import config from '../config';
import db from '../config/db';
import router from '../app/routes';
import apiRouter from '../app/routes/api';
const app = express();

app.locals.name = config.name;
app.locals.db = db;
app.locals.logger =  new (winston.Logger)({
    transports: [ new (winston.transports.Console)({
        colorize: true
    })],
});

app.use(...middleware);
app.use('/', router);
app.use('/api', apiRouter);
app.use(errorHandler);

export default app;
