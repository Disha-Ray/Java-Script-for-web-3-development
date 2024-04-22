// string indexing
let str = "Hello";
console.log(str[1]);
console.log(str.charAt(1));

// string comparison
console.log("a" === "a"); // true
console.log("a" === "A"); // false
console.log("a" === "a "); // false

console.log("a" > "b"); // false
console.log("a" < "b"); // true
console.log("abc" < "apple"); // true

// The string comparison will sort each letter in turn, which is why 'abc' is less than 'apple'.

// Character Casing

// Often with strings we want to ignore the character casing. We want to find "x" whether it is lower-case "x" or upper-case "X".

console.log("Hello".toLowerCase()); // hello
console.log("Hello".toUpperCase()); // HELLO
// Notice how these functions will affect the entire string. If we wanted to check if a string said "hello" regardless of it's casing we could use either of these functions:

console.log("Hello".toUpperCase() === "HELLO"); // true
console.log("Hello".toLowerCase() === "hello"); // true

// String Length
console.log("a".length); // 1
console.log("Hello".length); // 5
// finding the last letter in the string
console.log(str2.length - 1);

// string Looping
const string = "Hello";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// indexOf method
//There is a method on strings called indexOf that will help us find the first index of a string. Let's see this in action:

"Hello".indexOf("e"); // 1
"abca".indexOf("a"); // 0
"abc".indexOf("q"); // -1
"happy dog bark".indexOf("dog"); // 6

// lastIndexOf function on strings. This works as expected, it finds the last occurrence of the string and returns its index.
"My name is Disha".lastIndexOf("name");

// slicing strings
// Slice allows us to pass two parameters: a start index and an end index
"An apple".slice(0, 2); // An
"The 40 Thieves".slice(4, 8); // 40 T
// If the last index is not provided, slice will continue until the end of the string:

"Please Slice Me".slice(7); // Slice Me

// We can also use negative arguments to slice strings starting from the end of the string!

"the apple".slice(-5); // apple
"the apple".slice(-5, -2); // app

// question - count vowels in a string
function countVowels(str) {
  let v = ["a", "e", "i", "o", "u"];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (v.includes(str[i].toLowerCase())) {
      cnt++;
    }
  }
  return cnt;
}
