var myMap = new Map(); //Maikng a map.
myMap.set(1 , "Uno");
myMap.set(2 , "Dos");
myMap.set(3 , "Tres");
myMap.set(4 , "Cuatro");

console.log(myMap);

//Iterating the map using for of loop:
for(let key of myMap.keys())
{
    console.log(key);
}

for(let value of myMap.values())
{
    console.log(value);
}

//Iterating both at ones:
for(let [key , value] of myMap){
    console.log(`Key is: ${key} and value is ${value}`);
}

//Now using for each loop (method) to iterate the map: Gives the value first.
myMap.forEach( (value) => console.log(`${value}`) );
myMap.forEach( (value , key) => console.log(`${value} , ${key}`) );

//Deleting a key:
myMap.delete(2);
console.log(myMap);