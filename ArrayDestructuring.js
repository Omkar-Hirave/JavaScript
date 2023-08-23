// // Without the use of object destructuring you will need to do this

console.log("WITHOUT THE USE OF ARRAY DESTRUCTURING-->👇");

var MyDetails = ["Omkar" , "Ashok" , "Hirave" , "Fergusson College" , "Pune"];

var firstName = MyDetails[0];
var middleName = MyDetails[1];
var lastName = MyDetails[2];
var college = MyDetails[3];
var city = MyDetails[4];

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(college);
console.log(city);


// With the use array destructuring we can above using following way
console.log("WITH THE USE OF ARRAY DESTRUCTURING-->👇");

var MyDetails = ["Omkar" , "Ashok" , "Hirave" , "Fergusson College" , "Pune"];
var [firstName , middleName , lastName , college , city] = MyDetails;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(college);
console.log(city);

// You can also give default values to variable as follows
console.log("USE OF DEFAULT VALUES -->👇");
var MyDetails = ["Omkar" , "Ashok" , "Hirave" ,  , "Pune"];
var [firstName , middleName , lastName , college = "Vidya Pratisthan" , city] = MyDetails;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(college);
console.log(city);

// Array destructuring also works in nested arrays as follows;
console.log("ARRAY DESTRUCTURING ON NESTED ARRAYS -->👇");
var MyDetails = ["Omkar" , "Ashok" , "Hirave" ,  , "Pune" , ['Ellicium Solutions ' , "Intern"]];
var [firstName , middleName , lastName , college = "Vidya Pratisthan" , city , [company , position]] = MyDetails;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(college);
console.log(company);
console.log(position);

// Use of rest operator with array destructuring 
console.log("USE OF REST OPERATOR WITH ARRAY DESTRUCTURING-->👇");
var MyDetails = ["Omkar" , "Ashok" , "Hirave" , "Vidya Pratisthan" , "Pune"];
var [firstName , middleName , lastName , college , city] = MyDetails;

var [name , ...args] = MyDetails;
console.log(name);
console.log(args);


// Array destructuring with functions 
console.log("ARRAY DESTRUCTURING WITH FUNCTIONS--->👇");
function userDetails(){
    return  ["Omkar" , "Ashok" , "Hirave" , "Fergusson College" , "Pune"];

}
var [firstName , middleName , lastName , college , city] = userDetails();
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(college);
console.log(company);
console.log(position);
