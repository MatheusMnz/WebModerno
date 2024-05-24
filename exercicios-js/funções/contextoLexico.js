const valor = 'Global';


// Quando é declarada ela carrega consigo o contexto léxico no qual ela foi escrita
function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec()