const htmlCourse = {
    course: "HTML",
    students: [{name: "Rodrigo", email: "rodrigo@email.com"}]
};

// const jsCourse = {
//     ...htmlCourse,
//     course: "JS"
// }

// Vai modificar o htmlCourse tambem pois students é uma referencia e não uma copia
// jsCourse.students.push({name: 'João', email: 'joao@email.com'});


// Deep Copy (copia profunda)

const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, {name: "João", email: "joao@email.com"}],
}

jsCourse.students.push({name: "Maria", email: "maria@email.com"});

console.log(htmlCourse);
console.log(jsCourse);
