const values = [5, 12, 8, 130, 44];

// Retorna o primeiro elemento que o valor é maior que 10
const found = values.find((value) => value > 10);

console.log(found)

// Exemplos com objetos

const fruits = [ 
    {name: "apple", quantidade: 23},
    {name: "orange", quantidade: 10},
    {name: "banana", quantidade: 5}
];

const foundFruits = fruits.find((fruit) => {
    return fruit.name === "orange";
})

console.log(foundFruits)
