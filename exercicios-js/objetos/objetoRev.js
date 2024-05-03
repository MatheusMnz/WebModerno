// Coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "cadeira";
produto["marca"] = "genérica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto.marca;
console.log(produto);

const carro = {
    modelo: "Gol",
    ano: 1997,
    motorizacao: "1.6 AP",
    proprietario: {
        nome: "Matheus",
        idade: 21,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123,
        },
    },
    condutores: [
        {
            nome: "Letícia",
            idade: 21,
        },
        {
            nome: "Bianca",
            idade: 19,
        },
    ],
    calcularValorSeguro: function () {
        // .....
    },
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante";
console.log(carro);

delete carro.condutores
console.log(carro)