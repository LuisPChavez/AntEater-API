const { query } = require("./query");
const { organizationType } = require("./types");

const typeDefs = [query, organizationType];

module.exports = {
  typeDefs
};
