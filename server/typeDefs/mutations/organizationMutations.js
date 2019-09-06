const { gql } = require("apollo-server");

const organizationMutations = gql`
  type Mutation {
    addOrganization(
      name: String
      email: String
      description: String
      items: [ItemInput]
    ): [Organization]

    addItem(
      _id: String!
      organizationId: String!
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
