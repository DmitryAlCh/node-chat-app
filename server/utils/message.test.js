var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{
    //store res in variable
    //assert from match
    //assert text match
    //assert createdAt id number
    var from = "Mike";
    var text = 'Some test text';
    var testObj = generateMessage(from, text);
    console.log(testObj);
    expect(testObj).toExist('object does not exist or False');
    expect(testObj).toInclude({from,text}, 'object does not include from or text');
    // expect(testObj.from).toBeA('string', 'from field is not a string');
    // expect(testObj.text).toBeA('string', 'text field is not a string');
    expect(testObj.createdAt).toBeA('number', 'createdAt field is not a number');
  });
});
