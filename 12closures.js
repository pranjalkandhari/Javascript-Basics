function init(){
    var firstname = "Pranjal";
    console.log("I am init");
    function sayFirstName()
    {
        console.log(firstname);
    }
    sayFirstName();
}
//Now if we make a usual call tp init after the execution firstName no longer exists:
init();
//console.log(firstname); //This line will give error.

//But is we return sayFirstName as a refernce like:
function init2(){
    var firstname2 = "Pranjal 2";
    console.log("I am init 2");
    function sayFirstName2()
    {
        console.log(firstname2);
    }
    return sayFirstName2;
}
//Now store the returned function in a variable.
var value = init2(); //Now value 2 has a refernce of sayFirstName2
//Now we execute value: sayFirstName2
value(); //Now sayFirstName2 is able to access the firstName2 element. Hence it is NOT deleted. 
//As it's reference is saved.
//Here value is called closure. 
console.log("-----------------------------")

//Example of closure in Addition:
function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add = doAddition(4);
var ans = add(5);
console.log(ans);
//Also we can directly use the function wihtout storing it in another variable:
console.log( doAddition(12)(15) );