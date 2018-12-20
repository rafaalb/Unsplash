import StringByCommas from '../lib/StringByCommas';

describe('string separated by commas', () => {
  it('should work with empty values', () => {
    expect(StringByCommas([])).toEqual('');
    expect(StringByCommas(null)).toEqual('');
  });
  it('should return string separated by commas', () => {
    const name = ['Rafael', 'Emily', 'Mary']
    const jobs = ['Carpenter', 'Scientist']
    expect(StringByCommas(name)).toEqual('Rafael, Emily, Mary.');
    expect(StringByCommas(jobs)).toEqual('Carpenter, Scientist.');
    expect(StringByCommas(['Gamer'])).toEqual('Gamer.');
  });
});