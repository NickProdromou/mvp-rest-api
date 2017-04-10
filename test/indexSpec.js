import http from 'http';
import '../dist/index.js';

describe('Example Express Server', () => {

  it('should return 200', done => {

    http.get('http://localhost:3000/', res => {
      expect(res.statusCode).to.equal(200);
      done()
    });

  });

  it('should not error', done => {

    http.get('http://localhost:3000/', res => {
      expect(res.statusCode).not.to.equal(404);
      done()
    });

  });
});