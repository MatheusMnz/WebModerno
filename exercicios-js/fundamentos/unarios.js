let num1 = 1;
let num2 = 2;

// Pós-fixado
num1++;
console.log(num1)
--num1 // Ordem de precedência maior que o pós-fixado
console.log(num1) 
console.log(++num1 == num2--) // Um é incrementado antes da comparação, outro depois da comparação



