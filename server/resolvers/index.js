const { booksResolvers } = require('./bookResolvers');

const resolvers = [booksResolvers];

module.exports = {
  resolvers,
};