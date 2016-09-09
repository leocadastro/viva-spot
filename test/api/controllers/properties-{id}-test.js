'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var expect = chai.expect;
var app = require('../../../app');
var request = require('supertest');
const mongoose = require('mongoose');
var Property = mongoose.model('Property');

describe('/properties/{id}', function() {
  describe('get', function() {

	it('should respond with 200 Success', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "_id",
          "title",
          "price",
          "x",
          "y",
          "beds",
          "baths",
          "provinces",
          "squareMeters"
        ],
        "properties": {
          "_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "price": {
            "type": "number"
          },
          "x": {
            "type": "number"
          },
          "y": {
            "type": "number"
          },
          "beds": {
            "type": "number"
          },
          "baths": {
            "type": "number"
          },
          "provinces": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "squareMeters": {
            "type": "number"
          }
        }
      };

	  new Property({
			"x": 999,
			"y": 600,
			"title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			"price": 1250000,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"beds": 2,
			"baths": 3,
			"squareMeters": 210,
			"provinces": [ "Ruja" ]
		}).save(function (err, property) {

			request(app)
	            .get('/v1/properties/' + property._id)
	            .set('Accept', 'application/json')
	            .expect(200)
	            .end(function(err, res) {
	  			expect(validator.validate(res.body, schema)).to.be.true;
	            done();
	  		});
		})

    });

	it('should respond with 404 NotFound', function(done) {
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
          .get('/v1/properties/57d1875460b62d35b893353d')
          .set('Accept', 'application/json')
          .expect(404)
          .end(function(err, res) {
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
          .get('/v1/properties/57d1875460b62d35b893353cadasdasd')
          .set('Accept', 'application/json')
          .expect(500)
          .end(function(err, res) {
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

  });

});
