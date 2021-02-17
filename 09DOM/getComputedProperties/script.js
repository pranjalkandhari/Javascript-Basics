//Now we want to give the color as used in the HTML file and find it's rgb value of that color.

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

var center = document.querySelector(".center");

//Now how do I get the background color from the query?
//We use properties of the Window object:
//getComputedStyle: It take a element (here: returned by query selector).
console.log(window.getComputedStyle(center));
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
//console.log("CENTER:",getBGColor(center));

//EVENT Listeners: Records the event and performs an action 
//Event is the 1st argument
//(action is passed as 2nd argument as a function).
//eg: mouseentre tells when a pointing device enters a specific area.
//click: event of clicking

var pinkColor = getBGColor(pink);
//pink or any other color will actually refect of the query.
pink.addEventListener("click" , () => {
   center.style.backgroundColor = pinkColor; //style will help us 'change' the color unlike getComputedStyle.
})

var orangeColor  = getBGColor(orange);
orange.addEventListener("mouseenter" , () => {
    center.style.backgroundColor = orangeColor;
})

//Now lets make a generic function for all colors:
//But how? 
//We will return a function call to the window in another function :D
const magicColorChange = (element , color) => {
    return element.addEventListener("mouseenter" , () => {
        center.style.backgroundColor = color;
    });
}

magicColorChange(red , getBGColor(red));
magicColorChange(violet , getBGColor(violet));
magicColorChange(cyan , getBGColor(cyan));