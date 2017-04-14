import dotenv from 'dot-env'; //eslint-disable-line no-unused-vars
const NODE_ENV = process.env.NODE_ENV;

export default {
    name: 'Hotkey REST API',
    port: process.env[`${NODE_ENV}_PORT`]
};

