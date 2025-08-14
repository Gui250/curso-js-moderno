// fetch("http://localhost:3000/products")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error))

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const json = await response.json();
    console.log(json);
}


// fectchProducts();

async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const json = await response.json();
    console.log(json);
}

fetchProductById("2")

const productName = document.getElementById("name");
const price = document.getElementById("price");
const form = document.getElementsByTagName("form");


addEventListener("submit", async (event) => { 
    event.preventDefault();
    
   await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: price.value,
        })

    })

    await fetchProducts();
})