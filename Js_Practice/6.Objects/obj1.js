//  Objects : An object in JavaScript is a collection of key-value pairs where each key (also called a property) is a string and its value can be any data type (string, number, array, function, or even another object).


// Example 1: creating an object 
let student = {
    name: "Adam",
    roll: 1005,
    age : 23,
    semester : 'Third',
    city : 'Karachi',
    statuss :true
}


//  printing Object 
console.log(student);

// get specific key value pair
console.log(student.name); // Adam
console.log(student.roll); // 1005
console.log(student['semester']) // Third