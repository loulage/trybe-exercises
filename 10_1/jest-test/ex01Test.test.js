const ex01 = require('./ex01.js');

// 1. Teste se o retorno de sum(4, 5) é 9 
test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(ex01.sum(4, 5)).toEqual(9);
})

// 2. Teste se o retorno de sum(0, 0) é 0
test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(ex01.sum(0,0)).toEqual(0);
})

test('Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)', () => {
    expect(()=> {
        ex01.sum(4, "5").toThrow('parameters must be numbers');
    })
})
