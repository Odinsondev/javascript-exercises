const sumAll = function(num1, num2) {
  let result = 0
  if (num1 < 0 || num2 < 0) {
    return "ERROR"
  } else if ( typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR"
  } else if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      result = result + i
    }
    return result
  } else {
    for (let i = num2; i <= num1; i++) {
      result = result + i
    }
  return result
  }
};

// Do not edit below this line
module.exports = sumAll;
