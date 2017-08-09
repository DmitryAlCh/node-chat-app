var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
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

describe('generateLocationMessage', () => {
  it ('should geberate correct location object', () => {
    var from ="Admin";
    var lat = 1;
    var long = 2;
    var locationMessage = generateLocationMessage(from,lat,long);
    // console.log(locationMessage);
    expect(locationMessage).toExist('Objext does not exist or False');
    expect(locationMessage.from).toBe(from, "from prop is not the same");
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${lat},${long}`, "url is not correct");
    expect(locationMessage.createdAt).toBeA('number', 'createdAt field is not a number');
  });
});
