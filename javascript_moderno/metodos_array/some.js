const ages = [15, 30, 39, 29];


const result = ages.some((age) => { 
    return age < 18; 
}) // Verifica se pelo menos um item do array satisfaz a condição

console.log(result);