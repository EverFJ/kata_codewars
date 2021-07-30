function digitize(n) {
    let reversedArray = n.toString().split("").reverse().map(elem => parseInt(elem));
    return reversedArray;
}

console.log(digitize(348597))