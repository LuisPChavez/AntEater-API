const { gql } = require("apollo-server");

const query = gql`
  type Query {
    organizations: [Organization]
  }
`;

module.exports = {
  query
};

////getBookFromTitle(author: String): [Book]
