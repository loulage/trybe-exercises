function palindromo(str) {
    let reverso = str.split("").reverse().join("");
    if (str == reverso) {
        return true;
    } else {
        return false;
    }
}


console.log(palindromo('girafarig'));