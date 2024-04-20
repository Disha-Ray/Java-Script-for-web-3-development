// declaration of an object
const team = {
  name: "Mets",
  wins: 86,
  inPlayoffs: false,
};

// retrieve values
console.log(team.name);
console.log(team["name"]);

// adding arrays with objects
const teams = [team1, team2, team3];
for (let i = 0; i < teams.length; i++) {
  console.log(teams[i].name);
}

// export files in js
const ORDER_TYPES = require("./orderTypes");

// Find the Number of Keys
const object1 = { a: 1, b: 2, c: 3 }; // using the in operator
for (let key in object1) {
  console.log(key);
}

const object2 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(object2)); // ['a', 'b', 'c']
console.log(Object.values(object2)); // [1, 2, 3]

// round of numbers in js
let x = 21;
let ans = Math.round(x / 2);
console.log(ans);
