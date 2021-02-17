//DOM: Document Object Model.

//How to grab web elements in javascript?:

//These lines where written in the console:
var title = document.getElementsByTagName("h1")[0].innerHTML;
console.log(title);
//Output: LearnCodeOnline.in

//Query selector: use . for class and # for id.
var text = document.querySelector(".counter");