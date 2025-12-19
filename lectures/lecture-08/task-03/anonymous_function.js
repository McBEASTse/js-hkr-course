// let multiply = function (a, b) {
//   return a * b;
// };

let multiply = (a, b) => a * b;

let inputA = prompt("Enter the first value:");
let inputB = prompt("Enter the second value:");

if (inputA !== null && inputB !== null) {
  let cleanA = Number(inputA.replace(",", "."));
  let cleanB = Number(inputB.replace(",", "."));

  if (isNaN(inputA) || isNaN(inputB)) {
    console.log("The input must be a number.");
  } else {
    let result = multiply(cleanA, cleanB);
    console.log(`The sum is ${result.toFixed(2)}`);
  }
}
