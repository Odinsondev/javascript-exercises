const removeFromArray = function(array, ...values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === undefined) {
      return array
    } else if ( !(array.includes(values[i])) ) {
      continue
    } else {
    let index = array.indexOf(values[i])
    let removedValue = array.splice(index, 1)
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
