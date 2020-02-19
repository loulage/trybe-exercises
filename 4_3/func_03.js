function menorIndice(array) {
    let valor = 1000000000000000;
    let indiceMenor;
    for (let i = 0; i < array.length; i++) {

        if (array[i] < valor) {
            valor = array[i];
            indiceMenor = i;
        }
    }
    return (indiceMenor);
}
console.log("O menor indice do Array é o valor do número: " + menorIndice([2, 4, 6, 7, 10, 0, -3]));