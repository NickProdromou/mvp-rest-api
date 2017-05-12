import responseBuilder from '../methods/responseBuilder';
import queryFactory from '../methods/queryFactory';
import parsify from '../methods/parsify';

export default (req , res, next) => {

    try {
        const { logger, sequelOptions  } = req;
        const { keyboard_shortcuts } = req.app.locals.db;

        queryFactory(keyboard_shortcuts, sequelOptions, {type: 'single'} )
            .then(parsify)
            .then(parsedResponse => responseBuilder(res, req, parsedResponse))
            .then(responseObject => res.status(200).json(responseObject))
            .catch((err) => {
                if (err) {
                    logger.error(err);
                    next(err);
                }
            });
    }

    catch (err) {
        next(err);
    }
};
