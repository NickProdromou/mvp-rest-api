/* eslint-disable no-unused-vars */
export default (err, req, res, next) => {
    res.send({ error: err.stack });
};
