const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Return string with no line breaks if less than character length', () => {
      expect(wrap("Hello", 10)).to.equal('Hello')
  })

  it('Return string with a line break if greater than character length', () => {
      expect(wrap("I need to wake up earlier", 10)).to.equal('I need to \nwake up earlier')
  })

    

});


