// Function Declaration
function soma(x, y) {  // Dessa forma o interpretador carrega as funções primeiro e organiza, mesmo se chamar antes da declaração.
    return x + y;
}

// Function expression
const sub = function (x, y) {  // Nesse caso, o interpretador não carrega antes a função.
    return x - y;
};

// Named Function Expression
const mult = function mult(x, y) {  // Nesse caso, o interpretador não carrega antes a função.
    return x * y;
};
