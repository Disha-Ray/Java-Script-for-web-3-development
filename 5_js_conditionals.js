// if else
function isEqual(a,b){
  if(a===b){
    return true;
  }
  else{
    return false;
  }
}
console.log(isEqual(2,2));

// OR 

function isEqual(a,b){
  return a===b;
}
// else if
if(a > b) {
    console.log('a is greater!');
}
else if (b > a) {
    console.log('b is greater!');
} 
else {
    console.log('they are the same!');
}

// we can write the above else if because it is short hand of the below one
if(a > b) {
    console.log('a is greater!');
}
else {
    if(b > a) {
        console.log('b is greater!');
    }
    else {
        console.log('they are the same!');
    }
}

// The reason this works is because we don't actually need the braces for an if or else statement:

if(a > b) 
    console.log('a is greater');

//Typically, braces {} are encouraged for if/else statements.
