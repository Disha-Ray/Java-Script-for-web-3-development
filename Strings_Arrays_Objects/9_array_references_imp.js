let a = 3;
let b = a;

a = 10;
console.log(a); // 10
console.log(b); // 3
// When we assign b = a we are assigning the value inside a to b. This does not link a with b in any way. It simply copies the value 3 into b. This is how assignment works with all primitive values.

let arr = [1, 2, 3];
let brr = a;

a[0] = 5;
console.log(a); // [5,2,3]
console.log(b); // [5,2,3]
// This is because b stores a reference to the same array that a stores a reference to.
// When we use the word const with an array or an object, JavaScript does not care whether we change a value inside of the data structure.

//  arrays are objects. So when we talk about properties of an object, you can extend those to arrays as well.

// const keyword will stop us from changing the reference!

const array = [1, 2, 3];
array = [5, 6, 7];
// JavaScript will throw a TypeError: Assignment to constant variable.
