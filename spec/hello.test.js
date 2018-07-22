const chai = require('chai');
const expect = chai.expect;
const simple = require('../src/simple');

describe('Hello simple samples testing', () => {
  it('should work the promise', (done) => {
    simple.hello('hello').then( result => {
      expect(result).to.equal('hello');
      done();
    });
  });
});
