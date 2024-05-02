const fabricantes = ["mercerdes", "audi", "bmw"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // -> Callback para cada elemento do array.
fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
});
