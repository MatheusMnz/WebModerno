function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`; // Template String
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Primeiro param. é o contexto e os demais são parâmetros para a getPreco.
console.log(getPreco.call(carro, 0.17, "$"));

// Primeiro param. é o objeto de contexto de execução e depois um array contendo todos os parâmetros.
console.log(getPreco.apply(carro, [0.17, "$"]));
