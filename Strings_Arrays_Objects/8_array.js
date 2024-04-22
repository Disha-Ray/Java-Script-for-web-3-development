const arr = [40, 60, 30, 120, 180]; // declaring an array
let tot = 0; // finding average in an array
for (let i = 0; i < arr.length; i++) {
  tot += arr[i];
}
let average = tot / arr.length;
console.log(average);

// nested arrays
const arr2 = [[1, (2)[(1, 2)]], 2, 45];

// find less than ten elements in an array
function lessThanTen(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
      return false;
    }
  }
  return true;
}

// check if array has one
function hasOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      return true;
    }
  }
  return false;
}

// Returning an array
function greaterThanFive(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // is this element greater than 5?
    if (element > 5) {
      // yes, push this element on our array
      newArray.push(element);
    }
  }
  return newArray;
}

// Contains Element
const element = 3;
const array = [1, 2, 3];

const isContained = array.indexOf(element) >= 0;

console.log(isContained); // true

// changing array elements even when declared with const
const array1 = [1, 2, 3];
array1[0] = 5;
console.log(array1); // [5,2,3]

//Notice how this example uses const, and yet, we were still able to change the value! For objects and arrays, const only protects from changing the reference.
