function capitalize(string) {
  string = string.toLowerCase();

  let firstLetter = string[0].toUpperCase();

  let remainingLetters = string.slice(1);

  return firstLetter + remainingLetters;
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastLetter(string) {
  return string.slice(3);
}

console.log(lastLetter("abcd"));
