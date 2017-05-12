export default (req, res, next) => {

    const { originalUrl, logger } = req;

    try {

        if (originalUrl.includes('/api/keys/')) {
            req.routeName = 'keys';

        } else if (originalUrl.includes('api/key/')) {
            req.routeName = 'singleKey';

        } else if (originalUrl.includes('api/programs/')) {
            req.routeName = 'programs';

        } else if (originalUrl.includes('api/comments')) {
            req.routeName = 'comments';

        } else {
            req.routeName = 'unhandled';
        }

        next();
    }

    catch(err) {
        logger.error(err);
        next(err);
    }

};
