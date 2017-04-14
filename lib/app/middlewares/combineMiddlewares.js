import registerLogger from './registerLogger';
import bodyParser from 'body-parser';

export default [
    registerLogger,
    bodyParser.json(),
    bodyParser.urlencoded({extended: true})
];
