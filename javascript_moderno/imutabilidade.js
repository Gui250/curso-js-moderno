const address1 = {
    street: "Av. Brasil",
    number: 20
};


const address2 = {...address1, number: 30};

console.log(address1);
console.log(address2);


const list1 = ["Apple", "Banana"];

const list2 = [...list1, "Watermelon"];

console.log(list1);
console.log(list2);