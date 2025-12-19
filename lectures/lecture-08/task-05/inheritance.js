const numbers = [6, 2, 10, 4, 8];

// Inuti map() skapar man sin funktion (precis som en for-loop). För varje num: ta num och multiplicera i kvadrat.
let squaredNumbers = numbers.map((num) => num ** 2);

// Med reduce anger man först "det totala värdet just nu", "nuvarande värde". Det skickas sedan till en funktion. 0 sätts för att sätta en startpunkt i detta fall, annars kommer första värdet i array att vara startvärdet.
let totalSum = numbers.reduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
}, 0);

// ... (tre punkter) packar upp array så Math.max/min kan läsa innehållet. max och min kan inte läsa en array per default, utan behöver få informationen uppackad först.
let maxValue = Math.max(...numbers);
let minValue = Math.min(...numbers);

console.log(squaredNumbers);
console.log(totalSum);
console.log(maxValue);
console.log(minValue);
