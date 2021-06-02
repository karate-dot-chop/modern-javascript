import moment from 'moment';
const math = require('mathjs');

console.log("Hello from JS!");
let startOfDay = moment().startOf('day').fromNow();
console.log(math.sqrt(-4));
console.log(`Today started ${startOfDay}`);