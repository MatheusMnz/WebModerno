const a = { name: 'teste'}
const b = a // Recebe o endereço na mémoria (Atribuição por referência)
b.name = 'Mudei'

console.log(b)
console.log(a)

const c = 3
let d = c // Atribuição por valor
d = d + 1
console.log(d)
console.log(c)


let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)


 