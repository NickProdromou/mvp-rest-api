import tableColumns from '../mappings/ignoredColumns';

export default (parsedJson, modelName) => parsedJson
        .map(a => a.Field)
        .filter( column => tableColumns[modelName].indexOf(column) < 0);

