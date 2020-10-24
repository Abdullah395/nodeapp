let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../server')
//let port = process.env.HTTP_PORT || 2000;
//let url = 'http://localhost:' + port;

chai.use(chaiHttp);

describe('route: "/"  method: GET ', () => {
  it('should return "Hello World" with status code 200', (done) => {
        chai.request(server)
			.get('/')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('message').eql('Hello World');
				done();
			});
  });
});
