function getCircleArea(radius) {
  let convertedRadius = Number(radius);
  return convertedRadius * convertedRadius * Math.PI;
}

let input = prompt("What is the circle radius?");

if (input !== null) {
  let cleanInput = input.replace(",", ".");
  if (isNaN(cleanInput) || cleanInput <= 0) {
    console.log(`Enter a valid positive number.`);
  } else {
    let result = getCircleArea(cleanInput);
    console.log(`The area of the circle is ${result.toFixed(2)}`);
  }
}
