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