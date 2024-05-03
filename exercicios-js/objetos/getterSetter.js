const sequencia = {
    _valor: 1, // Underline é uma convenção
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    },
};

console.log(sequencia._valor); // Retorna o valor do atributo
console.log(sequencia.valor); // Executa a função get
sequencia.valor = 1000; // Executa a função set
console.log(sequencia);
console.log(sequencia._valor);
