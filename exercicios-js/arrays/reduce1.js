const alunos = [
    { nome: "Jõao", nota: 7.2, bolsista: true },
    { nome: "Maria", nota: 2.2, bolsista: false },
    { nome: "Lucas", nota: 4.3, bolsista: false },
    { nome: "Banca", nota: 5.7, bolsista: true },
];

// Map
console.log(alunos.map((a) => a.nota));

const resultado = alunos
    .map((a) => a.nota)
    .reduce(function (acumulador, atual) {
        console.log(acumulador, atual);
        return acumulador + atual;
    });

console.log(`\nResultado: ${resultado}`);
