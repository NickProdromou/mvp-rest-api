import registerLogger from '../../lib/app/middlewares/registerLogger';
import httpMocks from 'node-mocks-http';
let req = {};
let res = {};

describe('Middleware test', () => {

    before(function(done) {
        req = httpMocks.createRequest({
            method: 'GET',
            url: '/'
        });
        res = httpMocks.createResponse();
        done();
    });

    it('adds the logger to the request', function(done) {
        registerLogger(req, res, function next() {
        expect(req).to.hasOwnProperty('logger');
        done();
        });
    });

});
