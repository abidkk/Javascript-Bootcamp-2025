//  Iteration Objects

// creating an object 
let student = {
    name: "Adam",
    roll: 1005,
    age : 23,
    semester : 'Third',
    city : 'Karachi',
    statuss :true
}

// Iteration
for (let key in student) {
    console.log(student[key]);
}