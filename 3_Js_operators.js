// 1. aihtmatic operators +  -  *  /
console.log(2+3);
const a=10;
const b=5;
console.log(a-b);

const product= a*b;
console.log(product);

console.log(8/4);

// find the average of 3 numbers which are 20,30,10
const avg=(20+30+10)/3;
console.log(avg);

//  ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Random Numbers in javascript
/* The function Math.random generates a number between 0 and 1, not including 1.

If we wanted to generate a random number between 0 and 100, we could simply multiply the output:
*/

const randomNumber = Math.random() * 100;


// randomNumber will be between 25 and 100
const randomNumber = (Math.random() * 75) + 25;


// Math.floor

//This function will take 2.2598223 and return 2. The function will round a number down to the nearest integer. For example if we had the number, 2.9999, 
//the function will round this input down to 2.

function getFloor(x){
  return Math.floor(x);
}
console.log(getFloor(x));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. strict equality operators ( === and !==) and loose equality operators (== and !=)
// strict equality operator 
if(a===b) {                // === operator checks both data type and the value
  console.log("it's same);
  }
else {
  console.log("Not same");
}

if(a==b){                 //  == only checks value and not data type
  console.log("same");
}
else{
  console.log("Not same.");
}

console.log(2!==2); // false
console.log(5!==7); // true
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. Relational operators
console.log(4>2); // true
console.log(16<10); // false

// >= and <= 
console.log( a >= b);
console.log( a <= b);












