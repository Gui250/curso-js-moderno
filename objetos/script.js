

const product = { 
    name: "teclado", 
    quantity: 100, 
};


// Atualizando valor de uma propriedade
console.log(product.quantity);
product.quantity = 200; 
console.log(product.quantity);


console.log(product.name);
product.name = "Mouse"; 
console.log(product.name);


// Notação de colchetes 
product["quantity"] = 50; 
console.log(product);

// const user = {
//     id: 1, 
//     name: "Rodrigo",
//     address: { 
//         street: "Avenida Brazil",
//         city: "São Paulo",
//         geo: { 
//             latitude: 47.8084,
//             longitude: -15.7801
//         }
//     },
//     message: function() {
//         console.log(`Olá, ${this.name}`)
//     }
// }


// Operador de coalescência nula
const message = null;

console.log(message ?? "Mensagem padrão");


const user = { 
    name: "Rodrigo",
    picture: undefined
};

console.log(user.picture ?? "default.png");