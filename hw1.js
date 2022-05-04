function accumulatingArray(array) {
    let sum = (sum => value => sum += value)(0);
    return array.map(sum);
}
console.log(accumulatingArray([1, 2, 3, 4]));
console.log(accumulatingArray([1, 5, 7]));
console.log(accumulatingArray([1, 0, 1, 0, 1]));
console.log(accumulatingArray([]));