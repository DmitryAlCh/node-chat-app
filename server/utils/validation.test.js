const expect = require('expect');
// import isRealString
var {isRealString} = require('./validation.js');

describe('Should test values for being valid strings', () => {
  it('Should reject non-string values like numbers', () => {
    var isValid = isRealString(100);
    expect(isValid).toBe(false,"Failed to validate number");
  });
  it('Should reject emty strings', () => {
    var isValid = isRealString("              ");
    expect(isValid).toBe(false,"Failed to validate emty spaces");
  });
  it('should allow valid strings', () => {
    var isValid = isRealString("valid string with 132323");
    expect(isValid).toBe(true,"Failed to validate normal string");
  });
});

// should reject non-string values
// should reject strings with only spaces
// should allow string with non-space characters
