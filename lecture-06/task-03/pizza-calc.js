const pizzaPrice = 10;
const toppingPrice = 3;
let numberOfToppings = 5;

let totalPrice = pizzaPrice + toppingPrice * numberOfToppings;

console.log(
  `Total cost of one pizza with ${numberOfToppings} toppings is \$${totalPrice}`,
);
