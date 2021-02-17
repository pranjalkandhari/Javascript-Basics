//For all regular function calls, this points to the window (global) object.

//In Node global will give: {}
console.log(this);

//Now taking our object:
var student = {
    name : "Pranjal Kandhari",
    rNum : "022",
    courseList : [],
    //1st Method: To buy course: add new course name to the courseList
    buyCourse : function(courseName){
        //Now this here is just used like in C++: to referce current object:
        this.courseList.push(courseName);
    },

    //2nd Method: To tell number of courses enrolled
    getCourseCount : function()
    {
        console.log("IN getCourseCount this gives:" , this);
        return this.courseList.length;
    }
}
//Here this gives the object it is been used in.
//Note that student.getCourseCount is NOT a regular function.
student.getCourseCount();

//Now taking a regular function:
function sayHello()
{
    console.log("HELLO!")
    console.log("Value of this in a regular function call:" , this);
}
sayHello();

//NOW NOTE: if a regular function is in a function of the object it still gives the window object and NOT the object it is in:
//Just remember the rule on LINE 1
//Example:

var student2 = {
    name : "Pranjal Kandhari",
    rNum : "022",
    courseList : [],
    //1st Method: To buy course: add new course name to the courseList
    buyCourse : function(courseName){
        //Now this here is just used like in C++: to referce current object:
        this.courseList.push(courseName);
    },

    //2nd Method: To tell number of courses enrolled
    getCourseCount : function()
    {
        console.log("IN getCourseCount this gives:" , this);
        function sayHelloInStudent2()
        {
            console.log("HELLO in student 2");
            console.log("this in student2(as a nested function):", this); //We get the window object.
        }
        sayHelloInStudent2();
        return this.courseList.length;
    }
}

student2.getCourseCount();