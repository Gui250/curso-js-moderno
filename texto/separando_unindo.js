let text = "Estudar, Aprender, Praticar"; 

let separator = text.split(", ");
console.log(separator);

let message = "Estou aprendendo JavaScript"; 
console.log(message.split(" ")); 


// Unir String
let joined = separator.join(" - ");
console.log(joined);