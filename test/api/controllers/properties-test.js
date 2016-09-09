'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var expect = chai.expect;
var app = require('../../../app');
var request = require('supertest');

describe('/properties', function() {
  describe('post', function() {

    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string",
            "description": "a short comment"
          },
          "entityId": {
            "type": "string",
            "description": "a short comment"
          }
        }
      };

	  request(app)
          .post('/v1/properties')
          .set('Accept', 'application/json')
		  .send({
			  "x": 222,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(200);
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

    it('should respond with default Error', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string"
          }
        }
      };

	  request(app)
          .post('/v1/properties')
          .set('Accept', 'application/json')
		  .send({
			  "x": 9999,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(404);
			expect(res.body.message).to.equal('Province not found');
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

  });

  describe('get', function() {
    it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "foundProperties",
          "properties"
        ],
        "properties": {
          "foundProperties": {
            "type": "integer"
          },
          "properties": {
            "type": "array",
            "items": {
              "required": [
                "title",
                "price",
                "description",
                "x",
                "y",
                "beds",
                "baths",
                "squareMeters"
              ],
              "properties": {
                "title": {
                  "type": "string"
                },
                "price": {
                  "type": "integer"
                },
                "x": {
                  "type": "integer"
                },
                "y": {
                  "type": "integer"
                },
                "beds": {
                  "type": "integer"
                },
                "baths": {
                  "type": "integer"
                },
                "squareMeters": {
                  "type": "integer"
                },
                "description": {
                  "type": "string"
                }
              }
            }
          }
        }
      };

	  request(app)
          .get('/v1/properties?ax=100&ay=700&bx=300&by=0')
          .set('Accept', 'application/json')
          .end(function(err, res) {
			expect(res.statusCode).to.equal(200);
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

	it('should respond with 200 Success and Zero properties', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "foundProperties",
          "properties"
        ],
        "properties": {
          "foundProperties": {
            "type": "integer"
          },
          "properties": {
            "type": "array",
            "items": {
              "required": [
                "title",
                "price",
                "description",
                "x",
                "y",
                "beds",
                "baths",
                "squareMeters"
              ],
              "properties": {
                "title": {
                  "type": "string"
                },
                "price": {
                  "type": "integer"
                },
                "x": {
                  "type": "integer"
                },
                "y": {
                  "type": "integer"
                },
                "beds": {
                  "type": "integer"
                },
                "baths": {
                  "type": "integer"
                },
                "squareMeters": {
                  "type": "integer"
                },
                "description": {
                  "type": "string"
                }
              }
            }
          }
        }
      };

	  request(app)
          .get('/v1/properties?ax=0&ay=0&bx=0&by=0')
          .set('Accept', 'application/json')
          .end(function(err, res) {
			expect(res.statusCode).to.equal(200);
			expect(validator.validate(res.body, schema)).to.be.true;
			expect(res.body.foundProperties).to.equal(0);
            done();
		});

    });

    it('should respond with bad request', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string"
          }
        }
      };

	  request(app)
          .get('/v1/properties?ax=0&ay=0&bx=0&by=q')
          .set('Accept', 'application/json')
          .end(function(err, res) {
			expect(res.statusCode).to.equal(400);
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

  });

});
