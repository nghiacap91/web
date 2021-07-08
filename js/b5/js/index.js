//Global Scope
// let name = "Ba";

// let greeting = function () {
//     let name = "Beo U";

//     console.log("Hi, " + name + "!");
// }

// greeting();

// let SumRange = function(a, b) {
//     let sum = 0;
//     let min = a > b ? b : a;
//     let max = a > b ? a : b;

//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(SumRange(20, 10));
// console.log(SumRange(100, 200));

// function greeting(user) {
//     user = user || "Stranger"
//     console.log("Hello, " + user + "!!!");
//     console.log("Have fun!!!");
// }

// greeting("Ba");
// greeting("Bon");
// greeting();
// greeting("");
// greeting(null)

function demo() {
    for (let i = 0; ; i++) {
        if (i > 50) break;
        else console.log(i);
    }
    console.log(AfterLoop);
}

// function sum(a, b) {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 90));

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculator(operator, a, b) {
    return operator(a, b);
}

console.log(calculator(add, 1, 2));
console.log(calculator(sub, 3, 1));
console.log(calculator(mul, 3, 9));

let result = calculator(
    function (a, b) {
        return a ** b;
    },
    2,
    3
); 
console.log(result);