const fs = require("fs"); // Módulo nativo do Node (FyleSystem)

const path = __dirname + "/arquivo.json";

// Leitura de forma Síncrona
const content = fs.readFileSync(path, "utf-8");
console.log(content);

// Leitura de forma Assíncrona
fs.readFile(path, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo); // Precisa transformar em Objeto
    console.log(
        `\n${config.db.host}:${config.db.port}\n${config.db.user}:${config.db.pass}`
    );
});

// Executa antes, pois o arquivo está sendo lido de forma Assíncrona.
const config = require("./arquivo.json");
console.log(config.db);

// Executa antes, pois o arquivo está sendo lido de forma Assíncrona.
fs.readdir(__dirname, (err, arquivo) => {
    console.log("\nConteúdo da pasta");
    console.log(arquivo);
});
