"use strict"

function showMessage() {
    let personName = "Rodrigo Gonçalves"
    console.log(personName)
}

showMessage()

class Student {
    get point() {
        return 7;
    }
}

let student = new Student();

console.log(student.point);


function sum(a, b, c) {
    return a + b + c; 
}
