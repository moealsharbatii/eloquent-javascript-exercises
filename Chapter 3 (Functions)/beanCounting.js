// 3.3 Bean Counting
function countBs(s) {
  let numberOfBs = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === "B") {
      numberOfBs++;
    }
  }
  return numberOfBs;
}

function countChar(s, x) {
  let occurrences = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === x) {
      occurrences++;
    }
  }
  return occurrences;
}
console.log(countBs("BOB"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4
