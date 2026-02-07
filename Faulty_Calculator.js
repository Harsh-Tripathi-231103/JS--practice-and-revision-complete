let random = Math.random();

let a = Number(prompt("Enter first number:"));
let op = prompt("Enter the operation (+, -, *, /):");
let b = Number(prompt("Enter second number:"));

let obj = { 
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "**"
};

if (random < 0.8) {
  console.log(`The result is ${a} ${op} ${b}`);
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
} else {
  op = obj[op];
  console.log(`(Faulty) The result is ${a} ${op} ${b}`);
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
