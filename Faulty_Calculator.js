let random = Math.random();

let a = Number(prompt("Enter first number:"));
let op = prompt("Enter the operation (+, -, *, /):");
let b = Number(prompt("Enter second number:"));

if (Number.isNaN(a) || Number.isNaN(b) || !op) {
  alert("Invalid input!");
} else {
  // Faulty operation mapping (wrong answers)
  const faultyMap = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"   // divide ko power bana dega (wrong)
  };

  // 10% correct, 90% faulty
  let finalOp = random < 0.1 ? op : (faultyMap[op] || op);

  let result;

  switch (finalOp) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "**": result = a ** b; break;
    default:
      alert("Invalid operation!");
      throw new Error("Invalid operation");
  }

  console.log(`Random: ${random}`);
  console.log(`Using operation: ${finalOp} (entered: ${op})`);
  console.log(`Result: ${result}`);

  alert(`The result is: ${result}`);
}
