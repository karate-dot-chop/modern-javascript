var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JS!");
var startOfDay = moment().startOf('day').fromNow();
console.log(startOfDay);
console.log(math.sqrt(-4));