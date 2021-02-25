//Passing variable number of arguments:
//Use REST: It makes as array of all the arguments: takes the arguments and forms an array of the same name as the argument
function sumMultiple(...args) //args can be any name. //We can take normal arguments also BEFORE the REST argument.
{
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sumMultiple(1,2,3,4,5));


//Spread operator
//Ee can also convert array into multiple operators using 
function sumOf2Numbers(a,b) {
    return (a+b);
}

arr = [1,3,7];
console.log(sumOf2Numbers(...arr)); //This is spread operator.
//Additional numbers will be ignored.