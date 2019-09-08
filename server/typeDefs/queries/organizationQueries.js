const { gql } = require("apollo-server");

const organizationQueries = gql`
  type Query {
    allOrganizations: [Organization]
    getOrganizationByName(organizationName: String!): [Organization]
    getAllItemsFromOneOrganization(organizationId: String!): [Item]
    getAllItems: [Item]
  }
`;

module.exports = {
  organizationQueries
};
