const { gql } = require("apollo-server");

const organizationMutations = gql`
  type Mutation {
    addOrganization(
      name: String!
      email: String!
      description: String
      items: [ItemInput]
    ): [Organization]

    editOrganization(
      organizationId: String!
      name: String
      description: String
    ): [Organization]

    deleteOrganization(organizationId: String!): [_id]

    addItem(
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
