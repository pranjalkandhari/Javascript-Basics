/*
The JavaScript this keyword refers to the object it belongs to:

-> In a method, this refers to the owner object.
-> Alone, this refers to the global object.
-> In a function, this refers to the global object.
-> In a function, in strict mode, this is undefined.
-> In an event, this refers to the element that received the event.
-> Methods like call(), and apply() can refer this to any object.
*/

console.log(this);

function funWithThis(a) {
    console.log(this);
}
funWithThis();


