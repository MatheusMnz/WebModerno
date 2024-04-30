const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}
