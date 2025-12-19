let userValue1 = prompt("Enter a first value: ");
let userValue2 = prompt("Enter a second value: ");

let convertedValue1 = parseFloat(userValue1);
let convertedValue2 = parseFloat(userValue2);

if (!isNaN(convertedValue1 && convertedValue2)) {
  if (convertedValue1 > convertedValue2) {
    console.log(`${convertedValue1} is larger than ${convertedValue2}.`);
  } else if (convertedValue1 < convertedValue2) {
    console.log(`${convertedValue1} is smaller than ${convertedValue2}.`);
  } else if (convertedValue1 == convertedValue2) {
    console.log(`${convertedValue1} is the same value as ${convertedValue2}.`);
  } else {
    console.log(
      `${convertedValue1} is the not same value as ${convertedValue2}.`,
    );
  }
} else {
  if (isNaN(convertedValue1)) {
    console.log(
      `${userValue1} is not a number. Please enter a valid number next time.`,
    );
  } else if (isNaN(convertedValue2)) {
    console.log(
      `${userValue2} is not a number. Please enter a valid number next time.`,
    );
  }
}
