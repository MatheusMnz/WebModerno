// Object.preventExtensios -> Não permite a inclusão de novos objetos, apenas deleção
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "Promoção",
});

console.log("Extensível:", Object.isExtensible(produto));
produto.nome = "Borracha";
produto.descricao = "Borracha escolar";
delete produto.tag;
console.log(produto);

// Object.seal -> Não consegue adicionar nem excluir atributos, mas consegue modificar os valores.
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 28;
console.log(pessoa);

// Object.freeze = selado + valores constantes

