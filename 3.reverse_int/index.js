// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  console.log(reversed, parseInt(reversed));
  if (n.length === 1) return n;
  return n < 0 ? -parseInt(reversed) : parseInt(reversed);
};

module.exports = reverseInt;
