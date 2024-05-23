function Pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa();

this.ola = "Fala Pessoal";
exports.bemVindo = "Bem vindo ao node!";
module.exports.ateLogo = "Até o próximo exemplo";
