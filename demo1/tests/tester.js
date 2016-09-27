var request = require("request");
var expect    = require("chai").expect;
var should = require('chai').should()

describe("Hello World API", function() {

  describe("Hello World Test", function() {
    var host = process.env.SUT_HOST ? process.env.SUT_HOST : "localhost";
    expect(true).to.equal(true);
    var url = "http://" + host +":8080/";
    console.log(url);
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        should.not.exist(error);
        console.log(response.statusCode);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("body contains hello world", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("Hello world\n");
        done();
      });
    });

  });
});
