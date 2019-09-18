const reverseString = function(string) {
  let revString = string.split("").reverse().join("");
  return revString;
}
module.exports = reverseString
