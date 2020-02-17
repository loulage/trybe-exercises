let salarioBruto = 3000;
const faixa_1_INSS = 0.8;
const faixa_2_INSS = 0.9;
const faixa_3_INSS = 0.11;
const faixa_4_INSS = 570.88;

//Cálculo do salario base = Salario bruto - INSS
let salarioBase;
if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * faixa_1_INSS);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * faixa_2_INSS);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * faixa_3_INSS);
} else if (salarioBruto >= 5189.83) {
    salarioBase = salarioBruto - faixa_4_INSS;
}
//Cálculo do sálario liquido = Sálario Base - IR
const faixa_IR_A = 0.075;
const parcela_IR_A = 142.80;
const faixa_IR_B = 0.15;
const parcela_IR_B = 354.80;
const faixa_IR_C = 0.225;
const parcela_IR_C = 636.13;
const faixa_IR_D = 0.275;
const parcela_IR_D = 869.36;
let salarioLiquido;

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}
//Faixa A:
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido -= (salarioBase * faixa_IR_A) - parcela_IR_A
}
//Faixa B:
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido -= (salarioBase * faixa_IR_B) - parcela_IR_B
}
//Faixa C:
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido -= (salarioBase * faixa_IR_C) - parcela_IR_C
}
//Faixa D:
else {
    salarioLiquido -= (salarioBase * faixa_IR_D) - parcela_IR_D
}

console.log("Salário Bruto = $" + salarioBruto + " e Salário Liquido = $" + salarioLiquido);