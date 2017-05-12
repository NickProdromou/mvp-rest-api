import winston from 'winston';
const tsFormat = () => (new Date()).toLocaleTimeString();

export default (req, res, next) => {
    req.logger = new (winston.Logger)({
        transports: [new (winston.transports.Console)({timestamp: tsFormat, colorize: true,})],
    });
    next();
};
