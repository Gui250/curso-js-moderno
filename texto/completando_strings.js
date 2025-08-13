const creditCard = "123456781234928";

console.log(creditCard.length);


// Pega os ultimos 4 digitos
const lastDigits = creditCard.slice(-4)
console.log(lastDigits);

// Completa a string com *
const maskedNumber = lastDigits.padStart(creditCard.length, "*");
console.log(maskedNumber);

const number = "123";
console.log(number.padEnd(10, "#"));