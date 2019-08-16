const { gql } = require("apollo-server");

const organizationQueries = gql`
  type Query {
    allOrganizations: [Organization]
    getOrganizationByName(orgName: String!): [Organization]
  }
`;

module.exports = {
  organizationQueries
};

////getBookFromTitle(author: String): [Book]
