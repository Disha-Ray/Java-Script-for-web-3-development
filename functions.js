//What is a function?
// A function is re-usable code! With a function you can plug in different inputs and receive outputs based on the input.

function getNumber() {
    return 4;
}
const num=getNumber();
console.log(num);

function getMessage() {
     return "Hello";
}
const a = getMessage();
console.log(a);

//Parameters and Arguments
function addNumbers(a, b) {    // parameters ( in function declaration)
    return a + b;
}
addNumbers(1, 2);              // arguments (when we call the functions)
