let fs = require('fs');

let total = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(total-1);
