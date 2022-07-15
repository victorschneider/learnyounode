const modulo = require('./mymodule.js');

modulo(process.argv[2], process.argv[3], (err, data) => {
   if (err) {
      return console.log("Erro");
   }
   else{
      for (let i = 0; i < data.length; i++){
         console.log(data[i]);
      }   
   }
})
