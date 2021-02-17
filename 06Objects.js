//Objects have-> key: value pairs

var user = {
    firstName : "Pranjal",
    lastName : "Kandhari",
    loginCount : 22,
    loggedIn : true
}

console.log(user.firstName);
console.log(user.loggedIn);
//Other way to access:
console.log(user["lastName"]); //the key name must be in quotes.

user.loginCount = 35;
console.log(user.loginCount);

//Printing the whole object:
console.log(user);
//We can also use console other than log:
//table: Beautiful
console.table(user);

//METHODS in objects:

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
        return this.courseList.length;
    }
}

console.log(student);
student.buyCourse('Maths');
console.log(student);
console.log(`Number of course enrolled are: ` + student.getCourseCount());