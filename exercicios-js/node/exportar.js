console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

// Se eu quiser utilizar o módulo já criado, usar dessas maneiras
this.a = 1;
exports.b = 2;
module.exports.c = 3;

// Não funciona
exports = null;
console.log(module.exports);

// Não funciona
exports = {
    nome: "Teste",
};

// Caso queira atribuir um novo objeto, usar dessa maneira
console.log(module.exports);
module.exports = { publico: true };
