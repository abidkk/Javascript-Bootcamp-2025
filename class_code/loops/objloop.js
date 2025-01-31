//  Object iteration

let student = {
    name : 'Noman',
    age : 24,
    course : 'Python',
    status: false
}


//  for in loop
for (let key in student) {
    console.log(key, student[key])
}