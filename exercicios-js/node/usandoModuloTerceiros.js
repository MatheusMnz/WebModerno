const _ = require("lodash");
setInterval(() => {
    console.log(_.random(1, 50));
}, 1000);

// Usando o nodemon ele reinicia toda vez que atualiza o código