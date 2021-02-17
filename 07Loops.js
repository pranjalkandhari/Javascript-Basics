//FOR LOOP:
var arr = [10,13,14,12,19];
for(let i = 0 ; i<arr.length ; i++) //Is I use let
{
    console.log(arr[i]);
}
console.log("------------------")
// continue and break are just like C++.


//WHILE loop:
var i = 0;
while(i<3)
{
    console.log(i);
    i++;
}
console.log("------------------");


//DO WHILE:
i = 0;
do{
    console.log(i);
    i++;
}while(i<3);
console.log("------------------");


//FOR EACH: it is not considered a loop but an method on array:
//It is a callback method which take 
//It takes a function of one parameter as a parameter.
//Then foreach passes all the elements of the array one by one in the provided function and runs it.
arr.forEach( (s) => {console.log("ForEach:" , s);} );
console.log("------------------");
//OR:
arr.forEach( (s) => (console.log("ForEach:" , s)) );
console.log("------------------");


//FOR OF LOOP: Used for Arrays. (CANT work with objects)
for(const num of arr)
{
    console.log("FOR OF",num);
}
console.log("------------------");


//FOR IN LOOP: Majorly used for Objects: (Can work with Arrays).
var symbols = {
    ig : "Instagram",
    yt : "YouTube",
    fb : "FaceBook"
};
for(const sym in symbols)
{
    console.log("FOR IN",sym,symbols[sym] ); //Note we do not need to put "" to use sym here.
}
console.log("------------------");
//But works good for arrays too:
for(const ok in arr)
{
    console.log("FOR IN",ok ); //Note we do not need to put "" to use sym here.
}