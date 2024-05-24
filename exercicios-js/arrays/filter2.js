Array.prototype.filter2 = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 5799, fragil: true },
    { nome: "Copo de Vidro", preco: 24.99, fragil: true },
    { nome: "Pneu", preco: 249.99, fragil: false },
];

// Outra forma
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

// Array filtrado
console.log(produtos.filter2(caro).filter2(fragil));
