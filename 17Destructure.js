arr = [1,2,3]

//Destructuring:
var [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log("------------------------------")

//Now mainly destructing is used in objects:
const obj = {
    name : "Pranjal",
    courseCount : 5,
    role : "Admin"
};

console.log(obj.courseCount);

const {name , courseCount , role} = obj; //Names must be same as object keys.

console.log(name);
console.log(courseCount);
console.log(role);