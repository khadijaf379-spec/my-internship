// practical coding
// every arthmetic opearator 

let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// every comparison operator 
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
console.log(5 == "5"); // true
console.log(5 === "5");// false
console.log(5 != "5"); // false
console.log(5 !== "5");// true

// every logical operator
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// type coercion examples 
console.log("5" + 3);   // "53" (string concatenation)
console.log("5" - 3);   // 2 (converted to number)
console.log("5" * "2"); // 10
console.log(true + 1);  // 2
console.log(false + 1); // 1

// operator precedence example 
console.log(2 + 3 * 4);       // 14 (multiplication first)
console.log((2 + 3) * 4);     // 20 (parentheses first)
console.log(10 - 2 + 3);      // 11 (left to right)
console.log(2 ** 3 ** 2);     // 512 (right to left)


//logic building
//percentage caculator
let part = 45;
let total = 200;
let percentage = (part / total) * 100;
console.log(percentage + "%");   // 22.5%

//gpa calculator
let gradepoints = 3.7 + 3.3 + 4.0;
let credithours = 3 + 3 + 3;
let gpa = ( gradepoints / credithours);
console.log(gpa);

//currency convertor
let amount = 100;
let exchangeRate = 278;
let currency = (amount * exchangeRate);
console.log(currency);

//Build a Console-Based Utility Calculator
// basic calculator 
// Step 1: Define the values
let num1 = 10;
let num2 = 5;
let operator = "+";

// Step 2: Variable to store the result
let result;

// Step 3: Use switch statement to perform the operation
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      result = "Error: Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operator";
}

// Step 4: Print the result to the console
console.log("Result:", result);