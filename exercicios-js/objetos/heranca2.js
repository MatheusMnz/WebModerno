// Cadeia de Protótipos
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1); // Sai procurando por toda a cadeia, Se encontrar já para a busca
console.log(filho.attr0); // Se referencia esse attr0 ao prototype, vai achar

// Não faça isso.
Object.prototype.attr0 = "Z";

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`;
    },
};

const ferrari = {
    modelo: "F40",
    velMax: 320,
};

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`;
    },
};

// Seto o Objeto pai
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // Pega o que foi definido no objeto
console.log(volvo); // Exibe a função da classe pai

volvo.acelerarMais(100);
console.log(volvo.status()); // Chama o método do objeto pai também

ferrari.acelerarMais(300);
console.log(ferrari.status());
