const { gql } = require("apollo-server");

const organizationType = gql`
  type Organization {
    id: String
    name: String
    email: String
    description: String
  }
`;

module.exports = {
  organizationType
};
