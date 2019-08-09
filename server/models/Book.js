const { books } = require("../data");

class Book {
  static all() {
    console.log("all ran");
    return books;
  }

  static getBookFromTitle(author) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].author == author) {
        return [books[i]];
      }
    }
  }
}

module.exports = {
  Book
};
