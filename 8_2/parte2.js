const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/*ex1 : Crie uma função para adicionar o turno da manhã na 
lesson2. Essa função deve possuir três parâmetros, sendo eles:
o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
const alterObjValue = (obj, key, value) => {
    return obj[key] = value;
}
console.log(alterObjValue(lesson2, 'turno', 'manhã'));
console.log("----------------------");

/*ex2 : Crie uma função para listar as keys de um objeto. 
Essa função deve receber um objeto como parâmetro.*/
const listObjectKeys = (obj) => {
    return Object.keys(obj);
}
console.log(listObjectKeys(lesson1));
console.log("----------------------");

/*ex3 : Crie uma função para mostrar o tamanho de um objeto. */
const objectLength = (obj) => {
    return Object.keys(obj).length;
}
console.log(objectLength(lesson3));
console.log("----------------------");

/*Crie uma função para listar os valores de um objeto. 
Essa função deve receber um objeto como parâmetro.*/
const listObjectValues = (obj) => {
    return Object.values(obj);
}
console.log(listObjectValues(lesson1));
console.log("----------------------");

/*Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
 Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
 Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:*/
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons);
console.log("----------------------");

/* Usando o objeto criado no exercício 5, crie uma função
 que retorne o número total de estudantes em todas as aulas. */

const studentsCount = `Numeros de Estudantes: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}  `;
console.log(studentsCount);
console.log("----------------------");