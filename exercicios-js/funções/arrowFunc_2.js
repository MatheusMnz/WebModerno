function Pessoa() {
    this.idade = 0;

    setInterval(() => {  // Utilizando funções Arrow o 'This' não varia de acordo com quem está chamando,
        this.idade++;    // Diferentemente do caso onde é declarado com function normal.
        console.log(this.idade);
    }, 1000);
}

new Pessoa