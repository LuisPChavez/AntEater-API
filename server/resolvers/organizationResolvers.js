const { Organization } = require("../models");

const organizationResolvers = {
  Query: {
    organizations: async () => await Organization.all()
  }
};

module.exports = {
  organizationResolvers
};
