const ferrari = {
    modelo: "F40",
    velMax: 320,
};

const volvo = {
    modelo: "V40",
    velMax: 240,
};

console.log(ferrari.__proto__); // Objeto pai
console.log(Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);
