const { match } = require("assert");
const { listenerCount } = require("process");

// Function 1
function retornaOla (text){
    return 'Olá ' + text + '!';
}

// Function 2
const yearsToDays = (years) => years * 365;

// Function 3
const calcularSalario = (horasTrabalhadas, valorHora) => 'Salário igual a R$' + horasTrabalhadas * valorHora;

// Function 4
const monthName = (monthNumber) => {
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
                  'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
                  'Novembro', 'Dezembro'];
    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1]
    }

    return 'Número de mês inválido';
}

// Function 5
const compareNumber = (number, numberToCompare) => {
    if (typeof number !== typeof numberToCompare) {
        return false;
    }
    return number >= numberToCompare;
}

// Function 6
const inverseInput = (userInput) => {
    if (typeof userInput === 'boolean'){
        return !userInput
    }

    if (typeof userInput === 'number'){
        if (userInput === Math.abs(userInput)){
            return -userInput
        }
        return Math.abs(userInput)
    }

    return 'Booleano ou Número esperados, entretanto o parâmetro é do tipo ' + typeof (userInput) + '!'
}

// Function 7
const numberBetween = (number, min, max, inclusive=false) => {
    if (inclusive == true){
        return number >= min && number <= max
    }
    return  number > min && number < max
}


// Function 8
const multiplyUsingSum = (number1, number2) => {
    let res = 0

    if (number2 < 0){
        number1 = -number1
        number2 = - number2
    }

    for (let i=0; i < Math.abs(number2); i++)
        res += number1
    
    return res
}

// Function 9
const repeat = (element, number) => {
    repeatedElement = []
    for (i=0; i<number; i++){
        repeatedElement.push(element)
    }

    return repeatedElement
}

// Function 10
const plusSymbol = (times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += '+';
    }
    return result;
}

// Function 11
const receiveArray = (userInput) => {
    let resArray = []
    let last = userInput.pop()
    let first = userInput.shift()
    resArray.push(first)
    resArray.push(last)

    return resArray
}

// Function 12
const removeProperty = (userObject, propertyToRemove) => {
    delete userObject[propertyToRemove]
    return userObject
}

// Function 13
const filterNumbers = (userArray) => {
    return userArray.reduce((resultado, elemento) => {
        if (typeof elemento == 'number'){
            resultado.push(elemento)
        }
        return resultado
    }, []);
}

// Function 14
function objetoParaArray(objeto) {
    return Object.keys(objeto).map(chave => [chave, objeto[chave]]);
}

// Function 15
const returnPairIndex = (userInput) => {
    let res = []
    for ( i = 0; i< userInput.length; i++){
        if ( i % 2 == 0 && userInput[i] % 2 == 0){
            res.push(userInput[i])
        }
    }
    return res
}

// Function 16
function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Function 17
const sumArray = (userInput) => {
    let res = 0
    for (i=0; i<userInput.length; i++){
        res += userInput[i]
    }
    return res
}

// Function 18
const despesasTotais = (userInput) => {
    let sum = 0;
    for (i=0; i<userInput.length; i++){
        sum += userInput[i]['preco']
    }
    return sum
}


// Function 19
const calcularMedia = (userInput) =>{
    let sum = 0;
    for(i=0; i<userInput.length; i++){
        sum += userInput[i];
    }

    return res = sum / userInput.length
}

// Function 20
const triangleArea = (base, altura) => {
    return ((base * altura)/2).toFixed(2)
}

// Function 21
const lessNumber = (userInput) => {
    if (userInput.length === 0) return;
    return userInput.reduce((menor, atual) => {
        return (atual < menor) ? atual : menor;
    })
}


// function 22
const sortFunction = (inputNumber) => {
    // Verifica se o inputNumber está dentro do intervalo de 1 a 10 e se é um número válido
    if (inputNumber < 1 || inputNumber > 10 || isNaN(inputNumber)) {
        console.log('Por favor, insira um número entre 1 e 10.');
        return; // Encerra a execução da função caso o número não esteja dentro do intervalo ou seja inválido
    }

    // Gera um número aleatório entre 1 e 10
    const sortNumber = Math.floor(Math.random() * 10) + 1;

    // Verifica se o número inserido é igual ao número sorteado e exibe a mensagem correspondente
    if (inputNumber === sortNumber) {
        console.log('Parabéns! O número sorteado foi o ' + sortNumber);
    } else {
        console.log('Que pena! O número sorteado foi o ' + sortNumber);
    }
}

// function 23
const countString = (input) =>  spaces = input.split(' ').length;

// Function 24
const countOcurrences = (input_char, input_str) => {
    const regex = new RegExp(input_char, 'g');
    const ocurrences = input_str.match(regex);
    return ocurrences ? ocurrences.length : 0;
}

// Function 25
const findWord = (substr, strings) => {
    const res = []
    let ocurrences = 0;
    for(i = 0; i<strings.length; i++){
        ocurrences = strings[i].match(substr)
        if (ocurrences) {res.push(strings[i])}
    }
    return res
}


// Function 26
const removeVogais = (word) => {
    console.log(word.replace(/(a|e|i|o|u)/g, ''))
}

// Function 27
const inverterHash = (hash) => {
    let newHash = {};
    let oldKeys = Object.keys(hash);
    for(let i = 0; i < oldKeys.length; i++) {
        newHash[hash[oldKeys[i]]] = oldKeys[i];
    }
    console.log(newHash);
}


// Function 28
const filterByLength = (list, size) => {
    newList = []
    for( i=0; i<list.length; i++){
        if (list[i].toString().length === size){
            newList.push(list[i])
        } 
    }
    return newList
}

// Function 29
const SecondBigger = (array) => {
    array.sort((a,b) => b - a);
    return array[1]
}

// Function 30
const getStudent = (hash) => {
    const keys = Object.keys(hash);
    let newHash = {};
    
    // Monta HashMap
    for (let i = 0; i < keys.length; i++) {
        const listValues = hash[keys[i]];
        let sum = 0;

        for (let j = 0; j < listValues.length; j++) {
            sum += listValues[j];
        }

        const media = sum / listValues.length;
        newHash[keys[i]] = media; 
    }

    const sortedEntries = Object.entries(newHash).sort((a, b) => newHash[b[0]] - newHash[a[0]]);
    const topStudent = sortedEntries[0];

    return { nome: topStudent[0], media: topStudent[1] };
};

