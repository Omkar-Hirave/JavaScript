console.log("WITHOUT THE USE OF OBJECT-->👇");
var details = ["Omkar" , "Hirave" , 29 , "Pune"];
console.log(details);

console.log("WITH THE USE OF OBJECT-->👇");
var details = {
    firstName : "Omkar",
    lastName : "Hirave",
    age : 29,
    city : "Pune"
}
console.log(details);

console.log("PRINTING PARTICULAR OBJECTS -->👇");
console.log(details.lastName);
console.log(details.city);

console.log("ADDING AN ENTIRE ARRAY IN OBJECTS -->👇");

var details = {
    firstName : "Omkar",
    age : 23,
    favMovies : ["The internship" , "Social Dilemma" , "The godfather"]
}
console.log(details.favMovies);

console.log("ADDING FUNCTION  IN OBJECTS -->👇");
var details = {
    firstName : "Omkar",
    lastName : "Hirave",
    age : 23,
    generateEmail : function(){
        console.log("Email created as -->👇");
        return `${this.firstName}${this.lastName}${this.age}@gmail.com`
    }
}
console.log(details.generateEmail());

console.log("ADDING OBJECT  IN ANOTHER OBJECTS -->👇");
var details = {
    firstName : "Omkar",
    lastName : "Hirave",
    age : 23,
    nestedObject : {
        college : "Fergusson College",
        State : "Maharastra",
        rank : 100
    }
}
console.log(details.nestedObject.State);

console.log("CREATING OBJECT USING new KEYWORD->👇");
var newObject = new Object();

// Method 1 --> Assigning values to keys of an object
newObject.firstName = "Omkar";
newObject.lastName = "Hirave";
newObject.age = 23;
newObject.college = "FC";
console.log(newObject);

// Method 1 --> Assigning values to keys of an object

newObject['firstName'] = "Omkar 1";
newObject['lastName'] = "Hirave 1";
newObject['age'] = 221;
newObject['college'] = "FC 1";

console.log(newObject);
