

subtract(2, 0);
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    console.log(a - b);
}
m(45, 54);

function m(a, b) {
    console.log(a * b);
}

div(22, 7);
function div(a, b) {
    console.log(a / b);

}
let c = Number(prompt(" Enter Value Of c"));
let d = Number(prompt("Enter Value Of d"));

console.log(add(c, d));


let outPutValue = add(c, d);
const OutPut = document.getElementById("OutPut");
OutPut.innerHTML = outPutValue;