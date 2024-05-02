let comparacomThis = function (param) {
    console.log(this === param); // Se executar no browser, o contexto global é outro e aponta para window
};

comparacomThis(global); // No browser seria Window

const obj = {};
comparacomThis = comparacomThis.bind(obj);
comparacomThis(global);
comparacomThis(obj);

let comparacomThisArrow = (param) => console.log(this === param); // Função definida dentro do módulo, logo o contexto léxico é o módulo.
comparacomThisArrow(global);
comparacomThisArrow(module.exports);

// Bind dentro de arrow
comparacomThisArrow = comparacomThisArrow.bind(obj);
comparacomThisArrow(obj);   // Arrow function não altera a referência do objeto. Associada ao contexto em que foi escrita.
comparacomThisArrow(module.exports)
