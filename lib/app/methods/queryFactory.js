export default (Model, options = {}, action) => {

    switch (action.type) {

    case 'multiple':
        return Model.findAll(options);

    case 'single':
        return Model.findOne(options);

    default:
        return Error('no valid action type passed');
    }

};
