let porcent = -40;

if (porcent >= 90) {
    console.log("Nota A");
} else if (porcent >= 80) {
    console.log("Nota B");
} else if (porcent >= 70) {
    console.log("Nota C");
} else if (porcent >= 60) {
    console.log("Nota D");
} else if (porcent >= 50) {
    console.log("Nota E");
} else if (porcent < 50 && porcent >= 0) {
    console.log("Nota F");
} else if (porcent > 100 || porcent < 0) {
    console.log("ERRO - Nota precisa ser entre 0 a 100");

}