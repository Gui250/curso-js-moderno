const book = { 
    title: "Objetos Imutáveis", 
    category: "javascript", 
    author: {
        name: "Rodrigo", 
        email: "rodrigo@email.com"
    }
};

// O javascript em si não impoe restrições à modificação nos objetos
// book.category = "HTML"; 


// Congela o objeto e impede a modificação
Object.freeze(book);
book.category = "CSS";

// O Object.freeze() nao congela objetos de forma profunda (aninhados)
book.author.name = "João";

console.log(book);