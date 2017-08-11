var moment = require('moment');

// jan 1st 1970 00:00:00 am
// 0
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 15:50 pm
//1:01 pm
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('H:mm a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
