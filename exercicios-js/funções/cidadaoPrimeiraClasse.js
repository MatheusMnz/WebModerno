// High-order function

// criar de forma literal
function fun1() {}

// Armazenar função (anônima) em variável
const fun2 = function () {};

// Armazenar dentro de array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de um objeto
const obj = {};
obj.falar = function () {
  return "opa";
};
console.log(obj.falar());

// Passar função como parâmetro
run = (fun) => fun();
console.log(
  run(function () {
    return "Função como parâmetro";
  })
);

// Uma função pode retornar/conter outra função
soma = (a, b) => {
  return function (c) {
    console.log(a + b + c);
  };
};

soma(2, 3)(5);

const cincoMais = soma(2, 3);
cincoMais(5);
