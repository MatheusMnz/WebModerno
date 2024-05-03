// Usando a notação Literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}

const f1 = criarFuncionario("Matheus", 45000, 3);
const f2 = criarFuncionario("Lucas", 45000, 6);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Json to Object
const fromJson = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJson.info);
