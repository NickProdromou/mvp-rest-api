import dotenv from 'dot-env';
import express from 'express';
import server from './config/server';

const app = express();
const port = process.env[`${process.env.NODE_ENV}_PORT`];

server(app, port);

app.get('/', (req, res) => {
    res.status(200).send('ok');
});

