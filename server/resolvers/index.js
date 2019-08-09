const { booksResolvers } = require("./bookResolvers");
const { organizationResolvers } = require("./organizationResolvers");

const resolvers = [organizationResolvers];

module.exports = {
  resolvers
};
