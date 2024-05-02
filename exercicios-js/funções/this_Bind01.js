const pessoa = {
  saudacao: "bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // O bind eu passo o objeto no qual o this irá se referenciar, nesse caso 'pessoa'.
falarDePessoa()

