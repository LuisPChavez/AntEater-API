const { gql } = require("apollo-server");

const organizationType = gql`
  type Organization {
    _id: String!
    name: String!
    email: String
    description: String
    items: [Item]
  }

  type Item {
    _id: String!
    coordinateX: Float!
    coordinateY: Float!
    price: Int!
    name: String!
    description: String
    locationName: String
  }
`;

module.exports = {
  organizationType
};
