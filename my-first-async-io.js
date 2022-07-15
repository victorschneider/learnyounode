let fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
   let total = data.toString().split('\n').length;
   console.log(total-1);
})
