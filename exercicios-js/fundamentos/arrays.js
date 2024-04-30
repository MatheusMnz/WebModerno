const listOfValues = [8, 9, 10, 11]
console.log(listOfValues.shift())
console.log(listOfValues.join(','))
console.log(listOfValues)
delete listOfValues[0]
console.log(listOfValues)
console.log(listOfValues.shift())
console.log(listOfValues)
console.log(listOfValues.unshift('teste'))
console.log(listOfValues)