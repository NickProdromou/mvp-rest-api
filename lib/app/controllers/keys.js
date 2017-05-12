import responseBuilder from '../methods/responseBuilder';
import queryFactory from '../methods/queryFactory';
import parsify from '../methods/parsify';

export default (req, res, next) => {

    const { logger, sequelOptions } = req;
    const { keyboard_shortcuts } = req.app.locals.db;

    try {

        queryFactory(keyboard_shortcuts, sequelOptions, {type: 'multiple'} )
            .then(parsify)
            .then(parsedResponse => responseBuilder(res, req, parsedResponse))
            .then(responseObject => res.status(200).json(responseObject))
            .catch((err) => {
                logger.error(err);
                next(err);
            });

    }

    catch(err) {
        logger.error(err);
        next(err);
    }
};
