function sumUntil(number) {
    let sum = 0;
    for (i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUntil(5));