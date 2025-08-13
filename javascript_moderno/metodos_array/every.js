const ages = [1, 30, 39, 29];

// Verificar se todas as idades, sao maiores ou igual a 18
const result = ages.every((age) => {
    return age >= 18;
})
console.log(result);