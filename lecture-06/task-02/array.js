let fruits = ["banana", "apple", "melon", "lemon"];
console.log(`Array original: ${fruits}, ${fruits.length}`);

fruits.pop();
console.log(`Array remove: ${fruits}, ${fruits.length}`);

fruits.push("orange");
console.log(`Array add: ${fruits}, ${fruits.length}`);

console.log(
  `Array position (manual inverted): ${fruits[3]}, ${fruits[2]}, ${fruits[1]}, ${fruits[0]}`,
);
