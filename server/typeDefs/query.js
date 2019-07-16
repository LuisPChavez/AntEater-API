const { gql } = require("apollo-server");

const query = gql`
  type Query {
    books: [Book],
    getBookFromTitle(author: String): [Book]
  }
`;

module.exports = {
  query,
};

////getBookFromTitle(author: String): [Book]