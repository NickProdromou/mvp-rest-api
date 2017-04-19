import fs from 'fs';
import parse from 'csv-parse/lib/sync';

export default (pathToCsv) => {

    return new Promise(( resolve, reject, err ) => {
        if (!fs.existsSync(pathToCsv)) {
            throw new Error('Path cannot be found');
        }
        resolve(parse(fs.readFileSync(pathToCsv), {columns: true}));
        reject(err);
    });
};
