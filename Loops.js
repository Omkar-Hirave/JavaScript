console.log("FOR-IN LOOP IN JS");
// When we have to iterate on keys we can use for in loop
let obj ={
    firstName : "Omkar",
    lastName : "Hirave",
    age : 40 ,
    college : "FC",
    city : "Pune"
} 
for(let key in obj){
    console.log("Key-->",key); 
}

var arr  = [10,20,30,40,50,60,70,80,90,100];
for(let index in arr){
    console.log(index);
}

// When we have to iterate on values we can use for of loop
console.log("FOR-OF LOOP IN JS");
var arr  = [10,20,30,40,50,60,70,80,90,100];
for(let value of arr){
    console.log(value);
}

// For Each loop 
console.log("FOR-EACH LOOP IN JS");
var arr = [10,20,30,40,50,60,70,80]
arr.forEach((value , key) => {
    console.log("Key is--" ,key);
    console.log("Values is--" ,value);

});



// Method 2 : 
arr.forEach(loop)
function loop(value , key){
    console.log("Key is--" ,key);
    console.log("Values is--" ,value);
}