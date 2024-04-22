// logical OR
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false

// logical operator is also known as Default operator
console.log("" || "Something Else"); // Something Else
//The empty string "" is a falsey value, so || will take the second value in this operation.
//This can be pretty useful with variables! We can use this to create a default message if one is not defined:

const message = WELCOME_MESSAGE || "Hello there!";
const age = user.age || 99;

//  It is much easier to enumerate all the falsey values. The truthy values will be all the values in JavaScript that are not falsey. Falsey values include false, 0, "", null, undefined, and NaN.

// Logical AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//  Logical AND operator is also called the guard operator!

const user = { name: "bob" };
console.log(user && user.name); // bob

const user2 = undefined;
console.log(user2 && user2.name); // undefined
//Notice how in the first example we successfully retrieve the user's name, while the second example returns undefined. In the second example, if we tried to retrieve this property directly, we would hit a run-time exception:
// Trying to log user2.name right here would result in an uncaught error: Uncaught TypeError: Cannot read property 'name' of undefined

// NOT Operator
console.log(!true); // false
console.log(!false); // true
console.log(!2); // false
console.log(!undefined); // true
// Since 2 is a truthy value, !!2 will evaluate to true.
