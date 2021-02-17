sayHello("Pranjal (We can use fucntions defined also! )")
function sayHello(name)
{
    console.log("Hello, " + name);
    console.log(`Hello, ${name} : This is using backticks.`);
    return "Awesome work";
}

//OTHER Way of decalaring a function: Specific to javascript.
//BUT: code above this will not be able to access the below function
//As is acts like a variable and variables are defined as scanned 
//(but works little different with proper variables :D: Line 36 )

//myFunction(3);   // This will give error. 
var myFunction = function (a)
{
    a++;
    console.log("Returning a+1");
    return a;
}

//While calling a function we use the paranthesis: sayHello()
//While refercing a fucntion we do not use paranthesis: sayHello()

console.log(sayHello("Pranjal Kandhari"))
console.log((myFunction(4)));

//Context: Global scope has a name/is an object in JS: window is name for browser.

function funtionInMiddle() //This automatically goes to the global context.
{
    console.log("We can also define functions here"); 
}
funtionInMiddle();

//NOW if we want to a use a variable before it's declaration.
console.log(myName); //Does not give error as name is defined below (Somewhere below in the code).
//Rather we get a undefined as till the above line name is not defined.
var myName = "Pranjal Kandhari";
console.log(myName);

function changeName(myName)
{
    myName = "New name";
}

console.log(myName); // Value of myName does not changes as the above function works on a context above the global context.

if(true) // Blocks other than functions are false blocks (There variables can be accessed outside too).
{
    var varInIf = "Hello PK";
}
console.log(varInIf); //Works good, But if we use let instead of var the varInIf can't be used here.

function funForVariable()
{
    var varInFun = 5;
    return varInFun;
}
//console.log(varInFun);   //This will give error as functions provide proper scope.

//Nested Functions:
function nestedFunLevel1()
{
    var nestedVarFun = 5;
    function nestedFunLevel2()
    {
        console.log(nestedVarFun);
    }
    nestedFunLevel2();
}

nestedFunLevel1();

//Intro to Arrow functions (Just Intro):
// Other way of making function (without the keyword: function):
var isEven = (a) => {
    //Check if a if even or not:
    return ((a%2) === 0) 
}
//NOTE: Arrow must always have a return type.
console.log(isEven(4));

//Callback functions (like comparators in C++): takes a arrow fucntion variable as a paramter.
//More detail in 05Arrays.js: around Line 31.