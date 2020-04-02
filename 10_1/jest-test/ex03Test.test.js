const ex03 = require('./ex03.js');

//Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
test(' se a chamada mySum([1, 2, 3, 4]) retorna o valor 10', () => {
    expect(ex03.mySum([1, 2, 3, 4])).toBe(10);
})

//Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
test('se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado', () => {
    expect(ex03.mySum([1, -2, -3, 4])).toBe(0);
})