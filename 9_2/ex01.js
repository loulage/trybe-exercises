const assert = require('assert');

const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const expected_result = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien'
]

const fantasyOrScienceFictionAuthors = (arr) => {
        const filteredArr = arr.filter((element) => (
            element.genre === 'Ficção Científica' || element.genre === 'Fantasia')).map((element) => `${element.author.name}`).sort();
        console.log(filteredArr)
        return filteredArr;
    }
    /* const allNameStudents = estudantes.filter((estudante) => (
      estudante.turno === 'Manhã')
    ).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);

    console.log(allNameStudents);*/
assert.deepEqual(fantasyOrScienceFictionAuthors(books), expected_result);