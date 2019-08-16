const { organizationQueries } = require("./queries/organizationQueries");
const { organizationType } = require("./types");
const { organizationMutations } = require("./mutations/organizationMutations");

const typeDefs = [organizationQueries, organizationType, organizationMutations];

module.exports = {
  typeDefs
};
