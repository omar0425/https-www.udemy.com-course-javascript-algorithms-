console.log("hello");
//Name swap
// Challenge
//Reverse the order of two provided strings.
//Examples
//"Abrahm Lincoln" ➡️ "Lincoln Abraham"
// "Hank Aaron" ➡️ "Aaron Hank"

//Use Built in functions
// tools
//String.prototype.split()
//Array.prototype.reverse()
//Array.prototype.join()

//Lets Go!!!😎
function nameSwap(str) {
  //step 1 ➡️ split string into an array
  let stringToArray = str.split(" ");
  //step 2 ➡️ Reverse array
  let reverseArray = stringToArray.reverse();
  //step 3 ➡️ Join array into string
  let reverseString = reverseArray.join(" ");
  //step 4 ➡️ Return string
  console.log(reverseString);
  return reverseString;
}
console.log(nameSwap("Abraham Lincoln"));
console.log(nameSwap("Hank Aaron"));
//One Line ➡️ return str.split(' ').reverse().join(' ')

//Indices
function nameSwap(str) {
  let arr = str.split(" ");
  return arr[1] + " " + arr[0];
}
console.log(nameSwap("Abraham Lincoln"));
console.log(nameSwap("Hank Aaron"));

// Remove Odd Numbers From an Array

// Challenge
// Create a function that takes an array of numbers and returns only the even values.
// The function should return an array containing only even numbers

// Examples
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 4, 6, 8, 10]
// [21, 26, 28, 29] -> [26, 28]

// Approach 1 - for loop

// Tools
// for statement
// http://bit.ly/for-loop-javascript
// remainder/modulus operator
// http://bit.ly/remainder-operator
//  Array.prototype.push()
// http://bit.ly/array-push

function evensOnly(arr) {
  // Step 1 -> Declare  `evenArray` variable and set to empty array
  let evenArray = [];
  // Step 2 -> Loop through entire array of numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }
  return evenArray;
}

console.log(evensOnly1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly1([21, 26, 28, 29]));

function evensOnly1(arr) {
  let evenArray = [];
  let evenFilter = arr.filter((x) => x % 2 === 0);
  return evenFilter;
}
