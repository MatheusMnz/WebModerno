function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma());

function soma2(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma2());
