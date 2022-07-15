let http = require('http');
let bl = require('bl');

let resposta = [3];

let control = [3];
control[0] = false, control[1] = false, control[2] = false;

function get(url, posicao, resposta, control){
   http.get(url, response => {
      response.pipe(bl((err, data) => {
         if (err) {
            return console.error(err);
         }
         resposta[posicao] = data.toString();
         control[posicao] = true;
         if (control[0] && control[1] && control[2]) {
            console.log(resposta[0]);
            console.log(resposta[1]);
            console.log(resposta[2]);
         }
      }))
   })
}

get(process.argv[2], 0, resposta, control);
get(process.argv[3], 1, resposta, control);
get(process.argv[4], 2, resposta, control);
