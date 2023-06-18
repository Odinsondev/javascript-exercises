const reverseString = function(string) {
  let lettersArray = string.split("")
  let reversedArray = lettersArray.reverse()
  let joinedString = reversedArray.join("")
  return joinedString
};

// Do not edit below this line
module.exports = reverseString;
