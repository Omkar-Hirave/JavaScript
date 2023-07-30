function greet(){
    console.log("Hello World using normal function..");
}
greet()

const greetMe = ()=>{
    console.log("Hello World using arrow functions..");
}
greetMe()

// Array function with parameters 
const print = (count)=>{
    for(let i = 0 ; i < count ; i++){
        console.log("Hello World..",i);
    }
}
print(5);

// Array function without parenthesis 
const square = (num)=> num * num

console.log("The square of num is "+square(20));

/**CallBack functions */
const calculate = (a , b , operation) =>{
    return operation(a,b);
}
// method 1 
const addition = calculate(100,786,function(num1 , num2){
    return num1 + num2;
})
console.log(addition);

// method 2 
const substraction = (a , b) => a - b ;
const subResult = calculate(78 , 486 , substraction)
console.log(subResult);

// method 3 
function multiply(a , b ){
    return a * b ;
}
const mulResult = calculate(9,9,multiply);
console.log(mulResult);

// inbuilt methods related to callback functions
const a = [4 , 1 , 6 , -2 , -5 , 3 , 2 , -8 , 6 , 7]
const firstNeg = (num)=>{
    return num < 0;
}
// find the first element in the array which is negative 
const result = a.find(firstNeg)
console.log("The first negative in the array is ",result);

// Find the index of first element in the array which is negative
const findIndex = a.findIndex(firstNeg)
console.log("The negative element is present at index ",findIndex)

// Iterate through each element in the array using forEach 
 a.forEach((num , i) =>{
    console.log("Element no-->", num ," & index is  ",i );
})
