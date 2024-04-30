const [a] = [10]
console.log(a)

const [n1, n2, n3, n4] = [10, 15, 20, 5]
console.log(n1, n2, n3, n4)

// Evitar usar
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)