import routeNamer from '../../lib/app/middlewares/routeNamer';


describe('routeNaming middleware', () => {

    it('should name the route based on the path and attach it to the req object', (done) => {

        let res = {};

        let req = {
          originalUrl: 'localhost:3001/api/keys/'
        };

        routeNamer(req, res, () => {
            expect(req).to.hasOwnProperty('routeName');
            expect(req.routeName).to.equal('keys');
            done();
        });

    });

    it('should set the routeName property to be "unhandled" if a route is unrecognized', (done) => {
        let res = {};
        let req = {
            originalUrl: 'localhost:3001/other'
        };

        routeNamer(req, res, () => {
            expect(req).to.hasOwnProperty('routeName');
            expect(req.routeName).to.equal('unhandled');
            done();
        });

    });

});
