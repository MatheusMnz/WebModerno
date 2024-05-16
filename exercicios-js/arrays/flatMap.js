const escola = [
    {
        nome: "Turma M1",
        alunos: [
            {
                nome: "Gustavo",
                nota: 8.1,
            },
            {
                nome: "Ana",
                nota: 9.3,
            },
        ],
    },
    {
        nome: "Turma M2",
        alunos: [
            {
                nome: "Rebeca",
                nota: 8.9,
            },
            {
                nome: "Lucas",
                nota: 9.2,
            },
        ],
    },
];

const getNotaAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaAluno);
const notas1 = escola.map(getNotasDaTurma);

console.log(notas1);

// Ao invés de ter um array de array, criar tudo em um único array
console.log(escola.flatMap(getNotasDaTurma));
