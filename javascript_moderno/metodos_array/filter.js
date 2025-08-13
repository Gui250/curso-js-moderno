const words = ["JavaScript", "HTML", "CSS", "Web"];

const result = words.filter((word) => {
    return word.length > 3; 
})

console.log(result);

const products = [
    {
        id: 1,
        description: "Produto 1",
        price: 100,
        promotion: true
    },
    {
        id: 2,
        description: "Produto 2",
        price: 200,
        promotion: false
    }
]

const promotion = products.filter((product) => { 
    return product.promotion === true; 
})

console.log(promotion)