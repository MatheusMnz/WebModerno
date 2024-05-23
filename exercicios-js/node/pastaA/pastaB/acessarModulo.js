const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// -> Caso criasse um modulo dentro de node_modules e acessando a propriedade dele
// const saudacao = require('saudacao')
// console.log(saudacao.ola)

const c = require("./pastaC");
console.log(c.ola2);

const http = require("http");
http.createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
}).listen(8080);
