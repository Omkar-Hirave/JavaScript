console.log("MAP METHOD 👇");
var arr = [10,20,30,40,50,60,70,80,90,100];

// Method 1 
var b = arr.map((a)=>{
    return a + "-";
})

console.log(b);

// Method 2
var b = arr.map(loop)
console.log(b);
function loop(g){
    return g + 110;
}

console.log("MAP FUNCTION ON OBJECTS INSIDE ARRAYS-->👇");
var obj = [
    {firstName : "Omkar", lastName : "Hirave"},
    {firstName : "Swaraj", lastName : "Hirave"},
    {firstName : "Ranjan", lastName : "Dhumal"},
    {firstName : "Ravikiran", lastName : "Batale"}
]

let res = obj.map((x)=>{
    return x.lastName;
})
console.log(res);

console.log("FILTER METHOD👇");
var arr = [10,20,30,40,50,60,70,80,90,100];

var filterAns = arr.filter((a)=>{
    return a % 30;
})
console.log(filterAns);

// Method 2 
var filterAns = arr.filter(checkEven)
function checkEven(a){
    return a >=48;
}
console.log(filterAns);


console.log("REDUCE METHOD");

console.log("WITHOUT REDUCE METHOD");
var numbers = [10,20,30,40,50,60,70,80,90,100];
var sum = 0 ;
for(let val of numbers){
    sum += val;
}
console.log(sum);

console.log("WITH REDUCE METHOD");
// Method 1 
var numbers = [10,20,30,40,50,60,70,80,90,100];
var sum = numbers.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue;
}, 0)
console.log(sum);

// Method 2
var numbers = [10,20,30,40,50,60,70,80,90,100];
var sum = numbers.reduce(sumFunction,0)

function sumFunction(accumulator , currentValue){
    return accumulator + currentValue;
}
