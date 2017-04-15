import app from './config/server';
import appConfig from './config';
import db from './config/db';

const { port } = appConfig;

app.listen(port, () => {
    app.locals.logger.info(`App Listening on ${port}`);
});

db.sequelize.authenticate().then(function() {
    app.locals.logger.info('Connection has been established successfully.');
    db.sequelize.sync({force: true});
})
.catch(function (err) {
    app.locals.logger.error('Unable to connect to the database:', err);
});
