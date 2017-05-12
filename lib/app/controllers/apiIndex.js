import responseBuilder from '../methods/responseBuilder';

export default (req, res) => {
    let response = responseBuilder(res, req,  [{}]);
    res.json(response);
};
