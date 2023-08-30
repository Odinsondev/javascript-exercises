const fibonacci = function(num) {
  if (num <= 0) {
    return "OOPS";
  } else {
    let array = [0,1,1];
    for (let i = 3; i <= num; i++) {
      array[i] = array[i - 2] + array[i - 1];
    }
    return array[num];
  }
};

// Do not edit below this line
module.exports = fibonacci;
