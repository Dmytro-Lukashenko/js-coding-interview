// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (const char of str) {
    !charMap[char] ? (charMap[char] = 1) : charMap[char]++;
  }
  console.log(charMap);
  let max = 0;
  let charMax;
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      charMax = char;
    }
  }
  return charMax;
}

module.exports = maxChar;
