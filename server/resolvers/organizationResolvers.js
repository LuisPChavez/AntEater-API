const { Organization } = require("../models");

const organizationResolvers = {
  Query: {
    allOrganizations: async () => await Organization.all(),
    getOrganizationByName: async (parent, args) =>
      await Organization.findOrgByName(args.orgName)
  },
  Mutation: {
    addOrganization: async (parent, args) =>
      await Organization.addOrg(args.orgName)
  }
};

module.exports = {
  organizationResolvers
};
