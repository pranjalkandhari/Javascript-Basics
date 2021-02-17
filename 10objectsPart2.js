//New was of defining objects: Functional way:
var User = function(firstName , courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Cousre count is ${courseCount}`);
    };
}

//We can also define a function outside of the above function (for objects) using: prototype:
User.prototype.getFirstName = function(){
    console.log(`First Name is ${this.firstName}`);
};

//Now the above function becomes LIKE a class
//But how to make objects:
var pranjal = User("Pranjal" , 3);
console.log(pranjal); //This gives us undefined as we are using a function.

//We use the new Keyword to create the obbject.
var pranjalObj = new User("Pranjal" , 3);
console.log(pranjalObj);
console.log("BELOW USING PROTOTYPE FUNCTION TO ACCESS FIRST NAME:")
pranjalObj.getFirstName();

//Making another object:
var hitesh = new User("Hitesh" , 2);
console.log(hitesh);

//new keyword is responsible for invoing the constructor and creating a new instance everytime.

//In JS Objects (in __proto__) we already have a lot of functions eg:
console.log(pranjalObj.hasOwnProperty("name")); //Gives true or false: tells if the key exists or not.
console.log(pranjalObj.hasOwnProperty("firstName"));