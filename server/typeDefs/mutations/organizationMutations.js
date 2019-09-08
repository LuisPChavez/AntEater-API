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

    addItemToOrganization(
      organizationId: String!
      coordinateX: Float!
      coordinateY: Float!
      price: Int!
      name: String!
      description: String
      locationName: String
    ): [Item]

    editItem(
      organizationId: String!
      itemId: String!
      coordinateX: Float
      coordinateY: Float
      price: Int
      name: String
      description: String
      locationName: String
    ): [Item]

    deleteItem(itemId: String!): [_id]
  }
`;

module.exports = {
  organizationMutations
};
