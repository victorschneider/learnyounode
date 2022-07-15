let fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
   for (let i = 0; i < data.length; i++){
      let arr = data[i].toString().split('.');
      if (arr[1] == process.argv[3]){
         console.log(data[i].toString());
      }
   }
})
