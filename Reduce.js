// Calculate total price of all products

const products = [
  { name: "Laptop", price: 5000 },
  { name: "Tablet", price: 3000 },
  { name: "Mobile", price: 2000 },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);

console.log(totalPrice);

// Calculate/Sum total numbers
const number = [10, 40, 80, 120];

const totalNumber = number.reduce((prev, next) => prev + next, 0);
console.log(totalNumber);
