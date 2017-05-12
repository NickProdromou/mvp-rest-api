export default (queryParams, baseJoin = {}, baseQuery = {}) => {

    let join = {include: baseJoin };
    let options = {
        where: baseQuery
    };

    for (let prop of Object.keys(queryParams)) {

        switch (prop) {

        case 'query_override':
            options.where = {[queryParams[prop]]: queryParams.program};
            break;

        case 'include':
            options.attributes = [...queryParams[prop].split(',')];
            break;

        case 'exclude':
            options.exclude = {exclude:[...queryParams[prop].split(',')]};
            break;

        case 'limit':
            options.limit = parseInt(queryParams[prop]);
            break;

        case 'offset':
            options.offset = parseInt(queryParams[prop]);
            break;

        case 'join_key':
            join.include.where = { [queryParams[prop]]: queryParams.program } ;
            break;

        case 'join_include':
            join.include.attributes = [...queryParams[prop].split(',')];
            break;

        case 'join_exclude':
            join.include.attributes = {exclude: [...queryParams[prop].split(',')]};
            break;

        default:

        }
    }


    if (queryParams.program === 'all') {
        delete join.include.where;
        delete options.where;
    }

    return Object.assign(options, join);

};
