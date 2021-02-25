//Element in HTML: <>
//We are going to add HTML elements using JS!

//Maing an array of objects:
var courses = [ 
    {
        name : "Complete React JS Course",
        price : "2.3"
    },
    {
        name : "Complete Angular Course",
        price : "2.7"
    },
    {
        name : "Complete MERN Course",
        price : "2.1"
    },
    {
        name : "Complete C++ Course",
        price : "2.8"
    }
];

//Now we want to loop through the array:
function generateList() {

    //Now we have to add lists but inside a unordered list so we need to get the list first.
    const ul = document.querySelector(".list-group"); //We saw the class name in HTML file
    ul.innerHTML = ""; //To reset the value to empty list
    courses.forEach( (course) => {

        //Now creating a list item:
        const li = document.createElement("li")
        //The above statement make an element like this: <li></li>
        //Now I want to add a class and lable it as list-group-item:
        li.classList.add("list-group-item"); //1 element can have many classes.

        //Now we need to add the inner test part 1: That is name of the course.
        const name = document.createTextNode(course.name); //Node: DOM tree analogy.
        li.appendChild(name);

        //Now we have another element: span: so we use:
        const span = document.createElement("span");
        //Now Adding class to span:
        span.classList.add("float-right");
        //Now adding the text price in our span:
        const price = document.createTextNode("$ " + course.price);
        //Now add price to span:
        span.appendChild(price);

        //Now adding span to aur list:
        li.appendChild(span);

        //Finally adding our list to the unordered list:
        ul.appendChild(li);
    } );
}

//generateList(); // This case our method is constanly running

//So we can use: (this will help run our function only when when reloaded).
window.addEventListener("load" , generateList);

//Now I want to add another feature: As I click the sort courses button the courses should be sorted according the price.
//We can look for the button: it has sort-btn at the last in class name:
const button = document.querySelector(".sort-btn");

//Now we add an event listner
button.addEventListener("click" , () => {
    //To sort we can give the function: the logic we want to use to sort.
    courses.sort( (a,b) => a.price - b.price ); //Look for the documentation.
    //Now re-generate the list:
    generateList(); //But we only use this, it adds value (the sorted values) but the old ons also stay.
    //So we added a line to refresh to unordered list by: ul.innerHTML = "";
});