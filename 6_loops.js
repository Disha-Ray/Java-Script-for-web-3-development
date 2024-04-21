let sum = 0;
for(let i = 1; i <= 4; i++) { 
    sum = sum + i;                        //  sum+=i; 
}

// for ([initialization]; [condition]; [update]) {
   // statement
//}

// find a factorial of a given number n
function factorial(n){
    let res=1;
    for(let i=1;i<=n;i++){
        res*=i;
    }
    return res;
}
const ans=factorial(5);
console.log(ans);

// loops in string
//  Let's add some exclamation marks to "Hello World"!

let str = "Hello World";
for(let i = 1; i <= 5; i++) {
    str += "!";
}
console.log(str); // Hello World!!!!!

// modulus
// find even numbers between 1 and 11
let count = 0;
for(let i = 1; i <= 11; i++) {
    const remainder = i % 2;
    const isEven = remainder === 0;
    if(isEven) {
        count++;
    }
}
console.log(count); 
// We get a count of 5 because there are 5 even numbers between 1 and 11. The numbers are 2, 4, 6, 8, a////nd 10
//   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// while loop

function topDouble(value, top) {
        while (value < top) {
            value *= 2;
        }
        return value / 2;
    
}
