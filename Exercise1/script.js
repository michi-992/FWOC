const data = {
    color: 'red',
    name: 'Jane Doe',
    type: 'Superhero',
    animalLongKeyName: 'Shark',
    number: 42,
    heroes: ['Wonder Woman:DC', 'Batman:DC', 'Thor:Marvel', 'Ant Man:Marvel'],
    msg: 'real message'
};

// 1. Pick out single values with destructuring

const { name, color } = data;

// 2. Destructive Arrays

const [ h1, h2 ] = data.heroes;

// 3. Copy arrays

const heroes = [
    'Wonder Woman:DC',
    'Batman:DC',
    'Thor:Marvel',
    'Ant Man:Marvel'
];

const customheroes = [...heroes];

customheroes.push('Spiderman:Marvel');

//console.log(heroes);
//console.log(customheroes);

printHeroes('A', 'B');
printHeroes(...heroes);

console.log(heroes);
console.log(...heroes);

function printHeroes(superhero, ...heroesToPrint) {
    console.log(superhero);
    console.log(heroesToPrint)
}