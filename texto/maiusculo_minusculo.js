let message = "Estou estudando os fundamentos do javascript";

// Exibindo texto em maisculo
console.log(message.toUpperCase());


// Exibir texto em minusculo
console.log(message.toLowerCase());

console.log(message.replace("Javascript", "HTML"));
console.log(message);

// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 24));

// Extraindo uma parte da string de trás para frente (start, end)
console.log(message.slice(-24, -10));

let textWithSpace = "   Texto de exemplo    ";
console.log(textWithSpace.length);

console.log(textWithSpace.trim())