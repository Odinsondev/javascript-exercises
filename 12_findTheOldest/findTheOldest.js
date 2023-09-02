const findTheOldest = function(peopleArray) {
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].yearOfDeath === undefined) {
      peopleArray[i].yearOfDeath = (new Date()).getFullYear();
    }
  }
  const orderedPeople = peopleArray.sort(function(a, b) {
    if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {      
      return -1;
    } else {
      return +1;
    } 
  });
return orderedPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
