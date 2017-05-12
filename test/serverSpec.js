import request from 'supertest';
import app from '../lib/config/server.js';

describe('Express Server', () => {

    it('should return 200', () => {
        request(app.listen(3000)).get('/').then( (result) => {
            expect(result.statusCode).to.equal(200)
        });
    });

    it('should not error', () => {
        request(app.listen(3000)).get('/').then( (result) => {
            expect(result.statusCode).to.not.equal(404);
        });
    });

});
