//  *** Array methods ***

let cities = ['Hyderabad', 'karachi', 'Lahore', 'Faislabad']
console.log(cities)


// ** 1. push(): push new element in the array 
cities.push('Islambad','Rawalpindi');
console.log(cities);


//  ** 2. pop(): delete last element of array
cities.pop(); // Rawalpinid is deleted 
console.log(cities);



// ** 3. unshift(): add new element in the array at the begining
cities.unshift('Quetta'); 
console.log(cities)



// ** 4. shift(): delete the first element in the array from 0 index
cities.shift();
console.log(cities)



// ** 5. indexOf(): find index of specific element in the array
console.log(cities.indexOf('karachi')); // 1


//  ** 6. includes(): find an is available or not in the array (will return true | false);
console.log(cities.includes('Lahore')); // true
console.log(cities.includes('Mirpurkhas')) // false


