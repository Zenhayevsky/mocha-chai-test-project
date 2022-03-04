const chai = require('chai');
const letter_functions = require('../src/letter_functions');
const expect = chai.expect;

describe('isVowel()', () => {
  it('Deveria retornar true para a letra a', () => {
    expect(letter_functions.isVowel('a')).to.equal(true);
  });
})