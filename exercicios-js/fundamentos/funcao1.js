function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(3, 5);
imprimirSoma(2);
imprimirSoma(2, 3, 5, 7, 9, 10);
imprimirSoma("a", "b");
imprimirSoma();

function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 6));
