const { Organization } = require("../models");

const organizationResolvers = {
  Query: {
    allOrganizations: async () => await Organization.all(),
    getOrganizationByName: async (parent, args) =>
      await Organization.findOrgByName(args.orgName)
  },
  Mutation: {
    addOrganization: async (parent, args) => {
      return await Organization.addOrganization(
        args.name,
        args.email,
        args.description
      );
    },
    addItem: async (parent, args) => {
      return await Organization.addItemToOrganization(
        args.organizationId,
        args.coordinateX,
        args.coordinateY,
        args.price,
        args.name,
        args.description,
        args.locationName
      );
    }
  }
};

module.exports = {
  organizationResolvers
};
