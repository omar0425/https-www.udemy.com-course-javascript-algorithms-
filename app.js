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
