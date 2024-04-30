// novo recurso ES2015 

const pessoa = {
    nome: 'ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, humor='estavel'} = pessoa
console.log(sobrenome, humor)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)