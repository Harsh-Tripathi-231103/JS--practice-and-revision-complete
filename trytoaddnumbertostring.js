// create  a variable of type string and try to add a number to it.

var name="10"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

console.log(name - 45)

// Quick summary:

// In JavaScript, we do **not define variable data types manually**.

// ```js
// let value = "10";
// ```

// JS automatically understands that `value` is a **string** at runtime.

// When we add a number to a string:

// ```js
// let result = "10" + 5;
// console.log(result); // "105"
// ```

// `+` with a string means **concatenation**, so number `5` becomes string `"5"`.

// When we subtract:

// ```js
// let result = "10" - 5;
// console.log(result); // 5
// ```

// `-` is a numeric operator, so JS converts `"10"` into number `10`.

// But this gives `NaN`:

// ```js
// let result = "harsh" - 5;
// console.log(result); // NaN
// ```

// Because `"harsh"` cannot be converted into a valid number.

// `NaN` means **Not a Number**.

// JavaScript does **not automatically use ASCII values** in arithmetic.

// ```js
// Number("h"); // NaN
// ```

// To get character code manually:

// ```js
// "h".charCodeAt(0); // 104
// ```

// For full word:

// ```js
// let value = "harsh";

// let codes = value.split("").map(char => char.charCodeAt(0));

// console.log(codes); // [104, 97, 114, 115, 104]
// ```

// Final understanding:

// **JS is dynamically typed, but it does not blindly convert text into numbers. It only converts strings that look like valid numbers.**
