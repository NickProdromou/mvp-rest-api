import setupOptions from '../../lib/app/middlewares/setupOptions';
import requestMock from '../mocks/responseBuilderMocks'
import db from '../../lib/config/db';
let {req} = requestMock;

describe('setupOptions middleware', () => {

    it('should set a "sequelOptions" property on the request object', (done) => {

        let request = Object.assign({}, req, {routeName: 'keys'}, {app: {locals: {db: db} }});

        setupOptions(request, {}, function next() {
            expect(request).to.hasOwnProperty('sequelOptions');
            expect(request.sequelOptions).not.to.equal(undefined);
            return done()
        });


    })

});
