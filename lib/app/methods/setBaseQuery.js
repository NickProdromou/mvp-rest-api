export default (routeName, params ) => {

    let query = {};

    if (routeName === 'programs' && params.program !== 'all') {
        query.where = { short_name: params.program };
        return query.where;
    } else if (routeName === 'singleKey') {
        query.where = { id: params.id };
        return query.where;
    }

};
