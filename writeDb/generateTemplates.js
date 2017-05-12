import db from '../lib/config/db';
import getTableRows from './methods/getTableRows';
import fs from 'fs';
import logger from './methods/instantiateLogger';
import parsify from './methods/parsify';

let sequelizeModels = Object.keys(db).slice(2);

sequelizeModels.forEach( (model) => {
    db.sequelize.query({query: `SHOW COLUMNS from ${model}`, raw:true})
        .then(parsify).then((parsedJson)=>{
            return getTableRows(parsedJson.pop(), model);
        }).then((tableRows) => {
            const data = tableRows.map( row => row).join(',');
            fs.writeFile(`./writeDb/templates/${model}.csv`, data, (res, err) => {
                if (!err) {
                    logger.info(`file ${model}.csv written successfully`);
                }
            });
        });
});




