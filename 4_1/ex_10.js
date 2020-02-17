let custo = 10;
let venda = 100;
let lucro;

if (custo >= 0 || venda >= 0) {
    lucro = venda - (custo * 1.2);
    console.log("Lucro de $" + lucro)
} else {
    console.log("Erro: valores menores que 0");
}