console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log("Dentro de uma função");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();

// Dentro de uma função o This aponta para global e fora da função para module.exports
// Entretanto em Arrow functions o this aponta para module.export / exports.
