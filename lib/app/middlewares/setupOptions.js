import setOptions from '../methods/setOptions';
import setJoin from '../methods/setJoin';
import setBaseQuery from '../methods/setBaseQuery';

export default (req, res, next) => {

    const { params, query, routeName, logger } = req;

    try {
        const combinedValues = Object.assign({}, query, params);
        const baseJoin = setJoin(routeName, req.app.locals.db, params);
        const baseQuery = setBaseQuery(routeName, req.app.locals.db, params);
        req.sequelOptions = setOptions(combinedValues, baseJoin, baseQuery);
        next();
    }

    catch(error) {
        logger.error(error);
        next(error);
    }

};



