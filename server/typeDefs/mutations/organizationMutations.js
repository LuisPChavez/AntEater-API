const { gql } = require("apollo-server");

const organizationMutations = gql`
  type Mutation {
    addOrganization(
      name: String
      email: String
      description: String
    ): [Organization]

    addItem(
      coordinateX: Float!
      coordinateY: Float!
      price: Int!
      name: String!
      description: String
      locationName: String
    ): [Item]
  }
`;

module.exports = {
  organizationMutations
};

////getBookFromTitle(author: String): [Book]
