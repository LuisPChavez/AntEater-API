const { gql } = require("apollo-server");

const organizationMutations = gql`
  type Mutation {
    addOrganization(
      name: String
      email: String
      description: String
    ): [Organization]
  }
`;

module.exports = {
  organizationMutations
};

////getBookFromTitle(author: String): [Book]
