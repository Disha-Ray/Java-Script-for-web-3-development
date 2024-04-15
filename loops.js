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
