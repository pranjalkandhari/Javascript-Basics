var countries = ["India" , "USA" , "Japan" , "Russia"];
console.log(countries);
console.log(countries[0]);
console.log(countries[-1]); //Gives undefined, not an error
console.log(countries.length); //Tells length of array.
countries[2] = "China";
console.log(countries);

var mixTypeArray = ["Pranjal" , "CSE" , 22]; //Works good
console.log((mixTypeArray));

//To pop elements: 
mixTypeArray.pop(); // Always pops from last.
console.log(mixTypeArray);

//To add element in starting.
mixTypeArray.unshift("NEW ELE 1");
console.log(mixTypeArray);
//To remove element form starting:
mixTypeArray.shift();
console.log(mixTypeArray);

//To find: indexOf()
console.log(mixTypeArray.indexOf("CSE"));
console.log(mixTypeArray.indexOf("CSE1")); //-1 if element id NOT found.

//To convert some other datatype to Array:
var arr = Array.from("Pranjal");
console.log(arr);

//Callback functions (like comparators in C++): takes a arrow fucntion variable as a paramter.
var isEven = (a) => {
    //Check if a if even or not:
    return ((a%2) === 0) 
}
//Example of callback function or array:
var arr1 = [2,4,6,8];
var arr2 = [2,3,4,8];

console.log(arr1.every(isEven)); //every() is a callback function that checks the passed function for all values.
console.log(arr2.every(isEven));

//Now we can also write the function that we pass as parameter in line:
console.log(arr1.every( (a) => {return a%2 === 0; } ));
console.log(arr2.every( (a) => {return a%2 === 0; } ));

//Now we can shortern it even more by removing the return statement but then we also have to remove the curly braces.
console.log(arr1.every( (a) => a%2 === 0 ));
console.log(arr2.every( (a) => a%2 === 0 ));


//Filling all values of an array with another value:
var arr = [1,2,3,4,5,6,7,8];
console.log(arr.fill('p'));

arr = [1,2,3,4,5,6,7,8];
console.log(arr.fill('p' , 2)); //With a starting point

arr = [1,2,3,4,5,6,7,8];
console.log(arr.fill('p' , 2 , 6)); //With an end point


// If we want to filter (a callback function) the array on the basis of some condition.
arr = [1,2,4,2,6,7,2,5,9];
console.log(arr.filter( (num) => (num !=2) )); 


//Slicing:
arr = [1,2,3,4,5,6];
console.log(arr.slice(1,4));
//If only one argument other argument is condered to be the length of the array.
arr = [1,2,3,4,5,6];
console.log(arr.slice(3));


//Splice: Removing a range of Values and relacing them with one or more desired values:
//NOTE: 2nd Argument is the count of elements to be removed and NOT the end index: 
arr = [1,2,3,4,5,6];
arr.splice(2,3,"Hello");
console.log(arr);
//We can also add multiple values to be added in place of the removed values:
arr.splice(2,1,"P","K");
console.log(arr);