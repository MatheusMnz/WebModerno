require("./global");

console.log(MinhaApp.saudacao());

MinhaApp.nome = "Eita"; // Perigoso -> usar freeze no objeto
console.log(MinhaApp.nome);
