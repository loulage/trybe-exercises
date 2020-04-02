const ex02 = require('./ex02.js');

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
test('se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado', () =>{
    expect(ex02.myIndexOf([1, 2, 3, 4, 5], 3)).toBe(2);
})

// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
test ('se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado', () => {
    expect(ex02.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
}) 