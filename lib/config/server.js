import express from 'express';
import middleware from '../app/middlewares/combineMiddlewares';
import winston from 'winston';
import config from '../config';
import router from '../app/routes';
const app = express();

app.locals.name = config.name;
app.locals.logger =  new (winston.Logger)({
    transports: [ new (winston.transports.Console)({
        colorize: true
    })],
});

app.use(...middleware);
app.use('/', router);

export default app;
