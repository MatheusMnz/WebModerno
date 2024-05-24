const prod1 = {
    nome: "...",
    preco: 45,
};

const prod2 = {
    nome: "...",
    preco: 1234,
};

// Factory Simples -> Factory é uma função que no final retorna um novo objeto.
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva",
    };
}

console.log(criarPessoa());
