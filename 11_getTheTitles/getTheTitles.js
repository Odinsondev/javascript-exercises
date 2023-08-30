const getTheTitles = function(books) {
  const bookNames = books.map(function(book) {
    return book.title;
  });
  return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
