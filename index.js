// // // const sum = require("./sum");

// // // let sumA = 3;
// // // let sumB = 5;
// // // let sumResult = sum(sumA, sumB);
// // // console.log(sumResult);

// // const sum = require("./sum");
// // const multiply = require("./multiplication");

// // let sumA = 3;
// // let sumB = 5;
// // let sumResult = sum(sumA, sumB);
// // console.log(`Sum: ${sumResult}`);

// // let mulA = 4;
// // let mulB = 6;
// // let mulResult = multiply(mulA, mulB);
// // console.log(`Multiplication: ${mulResult}`);

// const sum = require("./sum");
// const multiply = require("./multiplication");
// const subtract = require("./subtraction");
// const divide = require("./division");

// let sumA = 3;
// let sumB = 5;
// let sumResult = sum(sumA, sumB);
// console.log(`Sum: ${sumResult}`);

// let mulA = 4;
// let mulB = 6;
// let mulResult = multiply(mulA, mulB);
// console.log(`Multiplication: ${mulResult}`);

// let subA = 10;
// let subB = 4;
// let subResult = subtract(subA, subB);
// console.log(`Subtraction: ${subResult}`);

// let divA = 8;
// let divB = 2;
// let divResult = divide(divA, divB);
// console.log(`Division: ${divResult}`);


const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

let result;
switch (operation) {
    case "sum":
        result = sum(num1, num2);
        break;
    case "multiply":
        result = multiply(num1, num2);
        break;
    case "subtract":
        result = subtract(num1, num2);
        break;
    case "divide":
        result = divide(num1, num2);
        break;
    default:
        result = "Invalid operation. Use sum, multiply, subtract, or divide.";
}

console.log(`Result: ${result}`);
