Array.prototype.reduce2 = function (callback, initialValue, startIndex) {
    let acc;
    let index = startIndex || 0;

    if (typeof initialValue !== "undefined") {
        acc = initialValue;
    } else {
        acc = this[index];
        index++;
    }

    for (let i = index; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce2(soma, 10, 2)); // Output: 28 (starts from index 2 with initial value 10 and sums all elements)
