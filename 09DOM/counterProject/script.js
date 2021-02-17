//Counter project helps us to maintain a counter.

//2 functions:
//setTimeout(function , milliseconds): Stop the function for the given time then resumes it.
//setinterval(function , milliseconds): Keeps running the function after the given interval.

var counter = document.querySelector(".counter");
let count = 1;
setInterval( () => {
    if(count<1000)
    { 
        count++;
        counter.innerText = count;
    }
} , 1 );

//Now we want to change the text followers to followers on instagram after some time:
var follower = document.querySelector(".follower");
setTimeout( () => {
    follower.innerText = "Followers on instagram";
} , 4000)
