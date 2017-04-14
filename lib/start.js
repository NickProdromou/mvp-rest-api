import app from './config/server';
import appConfig from './config';

const { port } = appConfig;

app.listen(port, () => {
    app.locals.logger.info(`App Listening on ${port}`);
});
