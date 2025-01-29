
//   Loops are also called  Iterators 
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Often this is the case when working with arrays:
// loop has 3 stages :    initialization   ->     Conditions  ->      Execution 


//  example 01 
for (let i = 0; i < 5; i++) {
    console.log(i)    
}


console.log("______________________________________________________________")




//example 02
for (let i = 1; i <= 5; i++) {
    console.log("loop") 
    
}




console.log("_________________________ Loop with Arrays ______________________________")
// loop with array 
let colors = ["brown", "orange", "green", "yellow", "black", "blue", "pink", "purple"]
//  colors
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index])  
}


//  values
let values = [10,20,30,40,50,60,70,80,90,100]

for (let i = 0; i < values.length; i++) {
    console.log(values[i])
}


