const data = ["Rodrigo Gonçalves", "rodrigo@email.com"];


// Desestruturando array
const [userName, email] = data;

console.log(userName);
console.log(email);

const fruits = ["Banana", "Apple", "Orange"];

// Desestruturando somente o primeiro
const [banana] = fruits;

console.log(banana);

// Ignorando o primeiro
const [_, apple] = fruits 
console.log(apple);