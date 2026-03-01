

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

// function Addition(a, b) {
//     return a + b;
// }

// function Subtraction(a, b) {
//     return a - b;
// }

// function Multiplication(a, b) {
//     return a * b;
// }

// function Division(a, b) {
//     return a / b;
// }

// let c = Number(prompt("Enter Your First Number"));
// let e = prompt("Enter Operator (+ , - , * , /)");
// let d = Number(prompt("Enter Your Second Number"));

// // Operator map
// const operations = {
//     "+": Addition,
//     "-": Subtraction,
//     "*": Multiplication,
//     "/": Division
// };

// let result = operations[e] ? operations[e](c, d) : "Invalid Operator";

// console.log("Result:", result);

// let name = prompt("Inter your name");let OutPut = document.getElementById("OutPut").innerHTML = "hello " + name;



// 1. Create a new <p> element
// const newPara = document.createElement("div");

// newPara.style.color = "Red";
// newPara.style.border = " 5px solid black"
// newPara.style.height = "100px"
// newPara.style.width = "100px"
// newPara.style.marginTop = "10px"


// const newPara1 = document.createElement("div");
// newPara1.style.color = "Red";
// newPara1.style.border = "5px solid black"
// newPara1.style.borderRadius = "50%"
// newPara1.style.height = "100px"
// newPara1.style.width = "100px"
// newPara1.style.marginTop = "10px"

// const newPara2 = document.createElement("div");

// newPara2.style.color = "Red";
// newPara2.style.border = " 5px solid black"
// newPara2.style.height = "100px"
// newPara2.style.width = "200px"
// newPara2.style.marginTop = "10px"

// // 2. Add some text to it
// // newPara.textContent = "This paragraph was created with JavaScript!";

// // 3. Append it to the body of the document
// document.body.appendChild(newPara);
// document.body.appendChild(newPara1);
// document.body.appendChild(newPara2);

let Round = document.createElement("div");
let OutPut = document.getElementById("OutPut");

Round.style.border = "5px solid black";
Round.style.height = "100px";
Round.style.width = "100px";
Round.style.borderColor = "Red";
Round.style.borderBottomColor = "green"
Round.style.borderTopColor = "Blue"
document.body.appendChild(Round);

