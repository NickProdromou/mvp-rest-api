export default (routeName, db, params ) => {

    const { programs, comments, keyboard_shortcuts } = db;
    let join;

    switch (routeName) {

    case 'keys':
        join = {
            model: programs,
            where : {short_name: params.program},
            attributes: programs.getColumns()
        };
        break;

    case 'singleKey':
        join = {
            model: programs,
            attributes: programs.getColumns()
        };
        break;

    case 'comments':
        join = {
            model: keyboard_shortcuts,
            where : {id: params.id},
            attributes: comments.getColumns()
        };
        break;

    default:

    }

    return join;

};
