function soma() {
  let soma = 0;

  // Recuperando parâmetros via argument
  for (i in arguments) {
    soma += arguments[i];
  }

  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2, 3, 4, 5, 5, 6));
console.log(soma(1, 2, 3, "concat", 5, 6, 7));
