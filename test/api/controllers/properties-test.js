'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var expect = chai.expect;
var app = require('../../../app');
var request = require('supertest');
const mongoose = require('mongoose');
var Property = mongoose.model('Property');

describe('/properties', function() {

	before(function(done) {
		Property.remove({}, function(err) {
		    console.log('Properties removed before running tests')
		 });

		 if (mongoose.connection.db) return done();

	   done()
	})


  describe('post', function() {

    it('should respond with 201 Created', function(done) {
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
			  "squareMeters": 210,
			  "provinces": ['Gode']
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(201);
			expect(validator.validate(res.body, schema)).to.be.true;
            done();
		});

    });

	it('should insert property on Gode province', function(done) {
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
			  request(app)
  				.get('/v1/properties/' + res.body.entityId)
  				.set('Accept', 'application/json')
  				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Gode']);
  					done();
  			});
	  });

    });

	it('should insert property on Ruja province', function(done) {
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
			  "x": 900,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			  request(app)
  				.get('/v1/properties/' + res.body.entityId)
  				.set('Accept', 'application/json')
  				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Ruja']);
  					done();
  			});
	  });

    });

	it('should insert property on Jaby province', function(done) {
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
			  "x": 1300,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			  request(app)
  				.get('/v1/properties/' + res.body.entityId)
  				.set('Accept', 'application/json')
  				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Jaby']);
  					done();
  			});
	  });

    });

	it('should insert property on Scavy province', function(done) {
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
			  "y": 100,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			  request(app)
  				.get('/v1/properties/' + res.body.entityId)
  				.set('Accept', 'application/json')
  				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Scavy']);
  					done();
  			});
	  });

    });

	it('should insert property on Nova province', function(done) {
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
			  "x": 900,
			  "y": 100,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			  request(app)
  				.get('/v1/properties/' + res.body.entityId)
  				.set('Accept', 'application/json')
  				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Nova']);
  					done();
  			});
	  });

    });

	it('should insert property on Groola province', function(done) {
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
			  "x": 700,
			  "y": 100,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
		  .end(function(err, res) {
			  request(app)
				.get('/v1/properties/' + res.body.entityId)
				.set('Accept', 'application/json')
				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Groola']);
					done();
			});
	  });

	});

	it('should insert property on Gode and Ruja provinces', function(done) {
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
			  "x": 550,
			  "y": 550,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 2,
			  "baths": 3,
			  "squareMeters": 210
		  })
		  .end(function(err, res) {
			  request(app)
				.get('/v1/properties/' + res.body.entityId)
				.set('Accept', 'application/json')
				.end(function(err, res) {
					expect(res.statusCode).to.equal(200);
					expect(res.body.provinces).to.deep.equal(['Gode', 'Ruja']);
					done();
			});
	  });

	});

    it('should respond with 422 invalid parameter beds', function(done) {
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
			  "x": 222,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 6,
			  "baths": 3,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(422);
			expect(res.body.message).to.equal('Property validation failed');
			expect(validator.validate(res.body, schema)).to.be.true;
		});

		request(app)
            .post('/v1/properties')
            .set('Accept', 'application/json')
  		  .send({
  			  "x": 222,
  			  "y": 600,
  			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
  			  "price": 1250000,
  			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  			  "beds": 0,
  			  "baths": 3,
  			  "squareMeters": 210
  		  })
            .end(function(err, res) {
  			expect(res.statusCode).to.equal(422);
  			expect(res.body.message).to.equal('Property validation failed');
  			expect(validator.validate(res.body, schema)).to.be.true;
            done();
  		});

    });

	it('should respond with 422 invalid parameter baths', function(done) {
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
			  "x": 222,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 3,
			  "baths": 5,
			  "squareMeters": 210
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(422);
			expect(res.body.message).to.equal('Property validation failed');
			expect(validator.validate(res.body, schema)).to.be.true;
            //done();
		});

		request(app)
            .post('/v1/properties')
            .set('Accept', 'application/json')
  		  .send({
  			  "x": 222,
  			  "y": 600,
  			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
  			  "price": 1250000,
  			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  			  "beds": 3,
  			  "baths": 0,
  			  "squareMeters": 210
  		  })
            .end(function(err, res) {
  			expect(res.statusCode).to.equal(422);
  			expect(res.body.message).to.equal('Property validation failed');
  			expect(validator.validate(res.body, schema)).to.be.true;
            done();
  		});

    });

	it('should respond with 422 invalid parameter squareMeters', function(done) {
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
			  "x": 222,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 3,
			  "baths": 2,
			  "squareMeters": 241
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(422);
			expect(res.body.message).to.equal('Property validation failed');
			expect(validator.validate(res.body, schema)).to.be.true;
		});

		request(app)
            .post('/v1/properties')
            .set('Accept', 'application/json')
  		  .send({
  			  "x": 222,
  			  "y": 600,
  			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
  			  "price": 1250000,
  			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  			  "beds": 3,
  			  "baths": 2,
  			  "squareMeters": 19
  		  })
            .end(function(err, res) {
  			expect(res.statusCode).to.equal(422);
  			expect(res.body.message).to.equal('Property validation failed');
  			expect(validator.validate(res.body, schema)).to.be.true;
            done();
  		});

    });

	it('should respond with 422 invalid parameter x', function(done) {
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
			  "x": 1401,
			  "y": 600,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 3,
			  "baths": 2,
			  "squareMeters": 200
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(422);
			expect(res.body.message).to.equal('Property validation failed');
			expect(validator.validate(res.body, schema)).to.be.true;
		});

		request(app)
            .post('/v1/properties')
            .set('Accept', 'application/json')
  		  .send({
  			  "x": -1,
  			  "y": 600,
  			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
  			  "price": 1250000,
  			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  			  "beds": 3,
  			  "baths": 2,
  			  "squareMeters": 200
  		  })
            .end(function(err, res) {
  			expect(res.statusCode).to.equal(422);
  			expect(res.body.message).to.equal('Property validation failed');
  			expect(validator.validate(res.body, schema)).to.be.true;
            done();
  		});

    });

	it('should respond with 422 invalid parameter y', function(done) {
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
			  "x": 222,
			  "y": 1001,
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": 1250000,
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": 3,
			  "baths": 2,
			  "squareMeters": 200
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(422);
			expect(res.body.message).to.equal('Property validation failed');
			expect(validator.validate(res.body, schema)).to.be.true;
		});

		request(app)
            .post('/v1/properties')
            .set('Accept', 'application/json')
  		  .send({
  			  "x": 222,
  			  "y": -1,
  			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
  			  "price": 1250000,
  			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  			  "beds": 3,
  			  "baths": 2,
  			  "squareMeters": 200
  		  })
            .end(function(err, res) {
  			expect(res.statusCode).to.equal(422);
  			expect(res.body.message).to.equal('Property validation failed');
  			expect(validator.validate(res.body, schema)).to.be.true;
            done();
  		});

    });

	it('should respond with 400 bad request for invalid parameters', function(done) {
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
			  "x": "x",
			  "y": "y",
			  "title": "Imóvel código 13, com 5 quartos e 4 banheiros",
			  "price": "price",
			  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			  "beds": "beds",
			  "baths": "baths",
			  "squareMeters": "squareMeters"
		  })
          .end(function(err, res) {
			expect(res.statusCode).to.equal(400);
			expect(res.body.message).to.equal('Request validation failed: Parameter (property) failed schema validation');
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
