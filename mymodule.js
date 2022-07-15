let fs = require('fs');

module.exports = (dir, extension, callback) => {
   fs.readdir(dir, (err, data) => {
      if(err){
         return callback(err);
      }
      else{
         let array = [];
         for (let i = 0; i < data.length; i++){
            let arr = data[i].toString().split('.');
            if (arr[1] == extension){
               array.push(data[i].toString());
            }
         }
         return callback(null, array);   
      }
   })
}
