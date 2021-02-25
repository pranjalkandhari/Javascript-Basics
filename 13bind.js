//Bind is used to borrow functions of other objects.

//Now say I have 2 objects:
var pranjal = {
    fName : "Pranjal",
    lName : "Kandhari",

    getInfo : function(){
        console.log(`
            First Name is: ${this.fName}
            Last Name is ${this.lName};
        `);
    }
};

var user = {
    fName : "Rock",
    lName : "Star"
}

pranjal.getInfo();

//Now we can see that variables in getInfo of pranjal (fname,lname) are also present in user.
//So we can borrow getInfo() for user using bind:
pranjal.getInfo.bind(user); //This returns the refernce of the function we want.

//We can diretly use it:
pranjal.getInfo.bind(user)();

//Or store in another variable:
getInfoForUser = pranjal.getInfo.bind(user);
//Then use it:
getInfoForUser();


//Another fucntion called: call which directly does the same job but does not returns a reference.
console.log("USING call():");
pranjal.getInfo.call(user); //Now getInfo() works for user.