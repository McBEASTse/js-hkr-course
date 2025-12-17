let total = 10;

try {
  total += numberError;
  total *= 2;
} catch (error) {
  console.error("An error occured:", error.message);
}

console.log("Final value:", total);
