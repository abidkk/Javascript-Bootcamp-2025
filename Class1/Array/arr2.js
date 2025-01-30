//  Array methods

let cities = ['Karachi', 'Lahore', 'hyderabad', 'Sialkot', 'Islamabad']
console.log(cities)

//  push : add new element at ending position
cities.push('Rawalpindi', 'Peshawer' )
console.log(cities) //


//  pop : delete last element of array
cities.pop();
console.log(cities)


//  unishift : add new element at zero index
cities.unshift('Quetta');
console.log(cities);



//  shift : delete element of zero index
cities.shift();
console.log(cities)


//  indexOf : find index of specific element
console.log(cities.indexOf('Sialkot'));


//  includes: retrun true or false 
console.log(cities.includes('Hyderabad')) // false
console.log(cities.includes('hyderabad')) // true
