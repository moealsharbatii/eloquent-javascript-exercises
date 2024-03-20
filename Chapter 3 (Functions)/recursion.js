// 3.2 Recursion
function isEven(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  else {
    if (number < 0) {
      return isEven(number + 2);
    }
    while (number >= 0) {
      return isEven(number - 2);
    }
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-6));
// → ??

/* Textbook solution

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

*/
