const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
console.log("\n");

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`);
});
console.log("\n");

// Usando Destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Adicionando uma propriedade
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);

// Object.freeze
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
