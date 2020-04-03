function maiorIndice(array) {
    let valor = -1000000000000000;
    let indiceMaior;
    for (let i = 0; i < array.length; i++) {

        if (array[i] > valor) {
            valor = array[i];
            indiceMaior = i;
        }
    }
    return (indiceMaior);
}
console.log("O maior indice do Array é o valor do número: " + maiorIndice([2, 3, 6, 7, 10, 1]));