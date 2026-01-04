let person = '{"name": "Theo Ukne", "age": 10, "isStudent": true}';

const persObj = JSON.parse(person);

console.log(persObj.name);
console.log(persObj.age);
console.log(persObj.isStudent);
