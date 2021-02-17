var fullName = "Pranjal Kandhari";
// Comments

var isOk = true; //Boolean

const c = 5;
//c = 6; : This gives runtime password

//To take input from web page: varName = prompt("Enter your name")  : Pop up comes up

console.log(`We can also print variable names in a string ${fullName}
But we have to use the Back ticks (Below the Esc key) 
Using this we can also print multiline strings`);


//OPERATORS:
var num1 = 11;
var num2 = 6;

var num3 = num1/num2
console.log(num3)

//Now if we want to round of num3: THIS ACTULLY ROUNDS (NOT TRUNCATE)
console.log(Math.round(num3))
//To truncate:
console.log(Math.trunc(num3))

//To find type of some variable:
console.log(typeof num3)


//CONDITIONAL:
if(num3 > 1) console.log("Num3 is less than 1");

var a = 1
if(a == 1) console.log("a equals to 1");
if(a === 1) console.log("a eqauls to 1"); //Triple eqaual to

//Uisng operator:
boolVal = true
boolVal ? console.log("val is TRUE") : console.log("val is FALSE");

if("") console.log("This will NOT run as string is empty");
if("Hello") console.log(("This will run as string is not empty"));
//Any value apart form: undefined, null, NaN, 0, ""   are considered true (truthy values)

// Now we must not javascript is loose laguage:
console.log(2 + "2");
console.log("2" + 2);
//In both cases the integer is converted to the string

//ALSO to be noted: Difference between == ans ===
if(2 == "2")
{
    console.log("This will be printed as == loosly compares.");
}

if(2 === "2")
{
    console.log("This will NOT be printed as === stricly compares");
}