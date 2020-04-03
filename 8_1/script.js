// Bloco 8.1 - Parte II - 

//ex 1: Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => {
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

// ex 2: Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (phrase) => {
    const arr = phrase.split(' ');
    let longestWLength = 0;
    let longestW;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWLength) {
            longestWLenght = arr[i].lenght
            longestW = arr[i];
        }
    }
    return longestW;
}
console.log(longestWord("qual sera a maior palavra"));

/* ex 3: Crie uma página que contenha:
Um botão ao qual será associado um event listener.
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão.
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/

//resposta no HTML