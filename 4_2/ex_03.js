let n = 5;
let array = [];
for (let i = 0; i < n; i++) {
    array[i] = " "
}
for (let j = array.length - 1; j >= 0; j--) {
    array[j] = "*";
    let piramide = array.join("");
    console.log(piramide);
}