

// subtract(2, 0);
// function add(a, b) {
//     return a+b;
// }

// function subtract(a, b) {
//     console.log(a - b);
// }
// m(45, 54);

// function m(a, b) {
//     console.log(a * b);
// }

// div(22, 7);
// function div(a, b) {
//     console.log(a / b);

// }
// let c = Number(prompt(" Enter Value Of c"));
// let d = Number(prompt("Enter Value Of d"));

// console.log(add(c, d));


// let outPutValue = add(c, d);
// const OutPut = document.getElementById("OutPut");
// OutPut.innerHTML = outPutValue;

//1st Result

// const a = Number(prompt("Enter value of c")); //input First Value
// const b = Number(prompt("Enter value of b"));//input second Value
// const c = prompt("Enter Operator(+ , - , * , /)"); // Operator 
// const Total = subtract(a, b);
// console.log(Total);
// let result;
// if (c === "+") {
//     result = a + b;
// } else if (c === "-") {
//     result = a - b;
// }
// else if (c === "*") {
//     result = a - b;
// }
// else if (c === "/") {
//     result = a / b;
// }
// const TotalNumberValue = document.getElementById("OutPut").innerHTML = result;


//second Result

function Addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}
function Multiplication(a, b) {
    return a * b;
}
function Divsion(a, b) {
    return a / b;
}
let c = Number(prompt("Enter Yout First Number")); //input First value
const e = prompt("Enter Operator(+ , - , * , /)"); // Operator 
let d = Number(prompt("Enter Yout First Number")); //input second value
let result;

if (e === "+") {
    result = Addition(c, d);
}
else if (e === "-") {
    result = subtraction(c, d);
}
else if (e === "*") {
    result = Multiplication(c, d);
}
else if (e === "-") {
    result = Divsion(c, d);
}
const TotalNumberValue = document.getElementById("OutPut").innerHTML = result;