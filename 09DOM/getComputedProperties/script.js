//Now we want to give the color as used in the HTML file and find it's rgb value of that color.

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const centre = document.querySelector(".centre");

//Now how do I get the background color from the query?
//We use properties of the Window object:
//getComputedStyle: It take a element (here: returned by query selector).
console.log(window.getComputedStyle(red));
//The above line gives all properties 
//How to find a specific property:
//If in CSS: background-color then getComputedStyle will have property: backgroundColor.

console.log(window.getComputedStyle(red).backgroundColor);
rbgVal = window.getComputedStyle(red).backgroundColor;
console.log(typeof rbgVal); //Value returned is of string type.

//Now lets make a function to do this task.
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}
console.log("red:",getBGColor(red));
console.log("cyan:",getBGColor(cyan));
console.log("violet:",getBGColor(violet));
console.log("orange:",getBGColor(orange));
console.log("pink:",getBGColor(pink));