process.env.NODE_ENV = 'test';

var testCase = require('nodeunit').testCase;


exports.Test = {

  TestOne: function TestOne(test) {
    console.log(arguments.callee.name);
    test.done();
  },

  TestTwo: function TestTwo(test) {
    console.log(arguments.callee.name);
    test.done();
  }
}

