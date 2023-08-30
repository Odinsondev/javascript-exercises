const palindromes = function(string) {
  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  var spaceRE = /\s+/g;
  let string2 = string.replace(punctRE, '').replace(spaceRE, '');   //removes punctuation and spaces
  let string3 = string2.toLowerCase();   //removes upperCase
  function reverseString() {   //from exercise 3 - reverseString
    let lettersArray = string3.split("");
    let reversedArray = lettersArray.reverse();
    let joinedString = reversedArray.join("");
    return joinedString;
  }
  if (string3 === reverseString()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
