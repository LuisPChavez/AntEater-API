const { Organization } = require("../models");

const organizationResolvers = {
  Query: {
    allOrganizations: async () => await Organization.all(),
    getOrganizationByName: async (parent, args) =>
      await Organization.findOrgByName(args.orgName)
  },
  Mutation: {
    addOrganization: async (parent, args) =>
      await Organization.addOrganization(
        args.name,
        args.email,
        args.description
      )
  }
};

module.exports = {
  organizationResolvers
};
