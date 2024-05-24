const alunos = [
    { nome: "Jõao", nota: 7.2, bolsista: true },
    { nome: "Maria", nota: 2.2, bolsista: false },
    { nome: "Lucas", nota: 4.3, bolsista: false },
    { nome: "Banca", nota: 5.7, bolsista: true },
];

// Desafio 1: Verificar se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista
const aoMenosUmBolsista = (res, bolsista) => res || bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(aoMenosUmBolsista));

