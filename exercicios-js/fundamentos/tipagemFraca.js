const texto = "Olá, mundo!";
const valoresASCII = [];
const valoresASCII_2 = [];

for (let i = 0; i < texto.length; i++) {
  const ascii = texto.charCodeAt(i);
  const ascii_2 = texto.codePointAt(i);
  valoresASCII.push(ascii);
  valoresASCII_2.push(ascii_2);
}

const peso = Number('6.6545')
console.log(typeof peso + ' ' + peso)
console.log(peso.toFixed(2)) // Exibe exatamente a quantidade de casas
console.log(peso.toPrecision(2)) // Arrendonda para a precisão
console.log(peso.toString(2)) // Passo a base para a qual vai converter
console.log(Number.isInteger(peso))
console.log(typeof Number)
console.log(valoresASCII)
console.log(valoresASCII_2)