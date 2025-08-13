// O metodo map() chama a funcao callback recebida por parametro para cada elemento do array, 
// retornando um novo array com os elementos modificados



const products = ["Teclado", "Mouse", "Monitor"];

products.map((product) => { 
    console.log(product);
})

// Sintaxe reduzida
products.map((product) => console.log(product));

// utilizando o novo objeto retornado 
const formatted = products.map((product) => {
    return {
        id: Math.floor(Math.random() * 100),
        description: product,
    };
});

console.log(formatted);