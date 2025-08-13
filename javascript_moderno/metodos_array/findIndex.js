const values = [4, 6, 8, 12];

console.log(values.findIndex((value) => {
    return value > 4; 
}))

const index = values.findIndex((value) => {
    return value === 8; 
})

console.log(values[index]);

const naoEncontra = values.findIndex((value) => {
    return value === 100; 
})

console.log(naoEncontra);