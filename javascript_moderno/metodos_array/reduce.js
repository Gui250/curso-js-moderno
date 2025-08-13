const values = [1, 2, 3,4, 5];

const sum = values.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
}) // Soma todos os itens do array

console.log(sum)