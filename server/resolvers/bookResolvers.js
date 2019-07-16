const { Book } = require("../models");

const booksResolvers = {
  Query: {
    getBookFromTitle: (parent, args, context, info) => Book.getBookFromTitle(args.author),
    books: () => Book.all(),
  },
};

module.exports = {
  booksResolvers,
}