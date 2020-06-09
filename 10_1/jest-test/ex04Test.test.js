const ex04 = require('./ex04.js');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(ex04.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(ex04.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})
// Verifique que o array passado por parâmetro não sofreu alterações
test('Verifique que o array passado por parâmetro não sofreu alterações', () => {
    expect(ex04.myRemove([1, 2, 4, 4], )
})
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
