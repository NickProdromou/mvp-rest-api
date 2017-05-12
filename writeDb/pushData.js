import db from '../lib/config/db';
import generateDataFromCsv from './methods/generateDataFromCsv';
import getTableRows from './methods/getTableRows';
import compare from './methods/compare';
import parsify from './methods/parsify';
import logger from './methods/instantiateLogger';

if (!process.argv[2]) {
    throw new Error('No argument passed to command line');
}

const tableName = process.argv[2].toString();
const csv = generateDataFromCsv(`./writeDb/input/${tableName}.csv`);

csv.then((csvData) => {
    db.sequelize.query({query: `SHOW COLUMNS from ${tableName}`, raw:true})
        .then(parsify).then((parsedResponse) => {
            return compare(getTableRows(parsedResponse.pop(), tableName), Object.keys(csvData[0]));
        })
        .then((isSame) => {

            if (!isSame) {
                throw new Error('table values are not the same');
            }

            db[tableName].bulkCreate(csvData).then(() => {
                return db[tableName].findAll();
            }).then( (tableName) => {
                logger.info(tableName);
            });
        });
})
.catch((err) => {
    logger.error(err);
});
