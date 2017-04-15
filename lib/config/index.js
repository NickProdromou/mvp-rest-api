import dotenv from 'dot-env'; //eslint-disable-line no-unused-vars
const NODE_ENV = process.env.NODE_ENV;

const config = {
    name: 'Hotkey REST API',
    port: process.env[`${NODE_ENV}_PORT`],
    database: process.env[`${NODE_ENV}_DATABASE`],
    db_username: process.env[`${NODE_ENV}_DB_USER`],
    db_password: process.env[`${NODE_ENV}_DB_PW`],
    db_options: {
        host: 'localhost',
        dialect: 'mysql',
        timestamps: true
    }
};

export default config;

