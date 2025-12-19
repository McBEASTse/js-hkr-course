function getTriangleArea(base, height) {
  return 0.5 * base * height;
}

let inputBase = prompt("What is the base of the triangle?");
let inputHeight = prompt("What is the height of the triangle?");

if (inputBase !== null && inputHeight !== null) {
  let cleanBase = Number(inputBase.replace(",", "."));
  let cleanHeight = Number(inputHeight.replace(",", "."));

  if (isNaN(cleanBase) || isNaN(cleanHeight)) {
    console.log("The input must be a number.");
  } else if (cleanBase <= 0 && cleanHeight <= 0) {
    console.log("The input must be a posivite number.");
  } else {
    let result = getTriangleArea(cleanBase, cleanHeight);
    console.log(`The area of the triangle is ${result.toFixed(2)}`);
  }
}
