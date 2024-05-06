console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Adicionando novos atributos e propriedades ao prototype
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

console.log("Escola COder".reverse());

Array.prototype.first = function () {
    return this[0];
};

console.log([1, 2, 3, 4, 5].first());

// Sobreescrevendo um método já existente --> Muito cuidado...
String.prototype.toString = function () {
    return "Agora deu ruim";
};

console.log("Escola Cod3r".reverse());
