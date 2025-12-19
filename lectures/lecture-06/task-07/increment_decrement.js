let userValue1 = prompt("Enter a first value: ");
let userValue2 = prompt("Enter a second value: ");

let convertedValue1 = parseFloat(userValue1);
let convertedValue2 = parseFloat(userValue2);

if (!isNaN(convertedValue1 && convertedValue2)) {
  if (convertedValue1 < convertedValue2) {
    console.log(`${convertedValue1}`);
    while (convertedValue1 < convertedValue2) {
      convertedValue1++;
      console.log(`${convertedValue1}`);
    }
    console.log(`Done.`);
  } else if (convertedValue1 > convertedValue2) {
    console.log(`${convertedValue1}`);
    while (convertedValue1 > convertedValue2) {
      convertedValue1--;
      console.log(`${convertedValue1}`);
    }
    console.log(`Done.`);
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
