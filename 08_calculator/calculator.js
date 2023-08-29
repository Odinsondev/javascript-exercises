const add = function(num1, num2) {   // only works for 2 numbers
	return num1 + num2;
};

const subtract = function(num1, num2) {  // only works for 2 numbers
	return num1 - num2;
	
};

const sum = function(array) {  // only works for arrays
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
	return total;
};

const multiply = function(...values) {
  let answer = values[0];
  for (let i = 1; i <values.length; i++) {
    answer = answer * values[i];
  }
  return answer;
};

const power = function(num1, powerOf) {
  let answer = num1;
	for (let i = 1; i < powerOf; i++ ) {
    answer = answer * num1;
  }
  return answer;
};

const factorial = function(num1) {
  let answer = 1;
  if (num1 === 0) {
    return answer;
  } else {
    for (let i = 1; i <= num1; i++) {
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
