const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 5799, fragil: true },
    { nome: "Copo de Vidro", preco: 24.99, fragil: true },
    { nome: "Pneu", preco: 249.99, fragil: false },
];

console.log(
    produtos.filter(function (p) {
        // Produtos acima de 2500 e produtos frágeis
        return p.preco >= 500 && p.fragil == true;
    })
);

// Outra forma
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

// Array filtrado
console.log(produtos.filter(caro).filter(fragil));
