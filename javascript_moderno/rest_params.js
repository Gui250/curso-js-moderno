// Rest params (...) permite representar um numero indeterminado de argumentos

function values(...args) {
    console.log(...args);
}

values(2, 1, 3, 4);