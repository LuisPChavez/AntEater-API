const { gql } = require("apollo-server");

const organizationMutations = gql`
  type Mutation {
    addOrganization(orgName: String!): [Organization]
  }
`;

module.exports = {
  organizationMutations
};

////getBookFromTitle(author: String): [Book]
