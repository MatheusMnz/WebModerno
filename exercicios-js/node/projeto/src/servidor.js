// Sempre que estiver trabalhando com uma comunição (rede) é necessário estabelecer uma porta para comunicação. (Porta 80 é a padrão em http)
// Porta é um processo
const porta = 3003;

const express = require("express");
const app = express();

// app.get("/produtos", (req, res, next) => {
//     console.log("Middleware 1");
//     next();
// });

app.get("/produtos", (req, res, next) => {
    res.send({ nome: "Notebook", preco: 123.32 }); // Converte para JSON
});

//Outra forma de colocar um middleware (para todas as requisições)
// app.use("/produtos", (req, res, next) => {
//     res.send({ nome: "Notebook", preco: 123.32 }); // Converte para JSON
// });


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});
