const book = { 
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com"
    }
}


function deepFreeze(object) {
    const props = Reflect.ownKeys(object);
    for(const prop of props) {
        const value = object[prop]; 

        if(value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value);
        }
    }


    return Object.freeze(object);
}

deepFreeze(book);


book.author.name = "João";

console.log(book);
