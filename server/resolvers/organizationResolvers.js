const { Organization } = require("../models");

const organizationResolvers = {
  Query: {
    allOrganizations: async () => await Organization.allOrganizations(),
    getOrganizationByName: async (parent, args) =>
      await Organization.findOrganizationByName(args.organizationName),
    getAllItemsFromOneOrganization: async (parent, args) =>
      await Organization.getAllItemsFromOneOrganization(args.organizationId),
    getAllItems: async (parent, args) => await Organization.getAllItems()
  },
  Mutation: {
    addOrganization: async (parent, args) => {
      return await Organization.addOrganization(
        args.name,
        args.email,
        args.description
      );
    },
    editOrganization: async (parent, args) => {
      return await Organization.editOrganization(
        args.organizationId,
        args.name,
        args.description
      );
    },
    deleteOrganization: async (parent, args) => {
      return await Organization.deleteOrganization(args.organizationId);
    },
    addItemToOrganization: async (parent, args) => {
      return await Organization.addItemToOrganization(
        args.organizationId,
        args.coordinateX,
        args.coordinateY,
        args.price,
        args.name,
        args.description,
        args.locationName
      );
    },

    editItem: async (parent, args) => {
      return await Organization.editItem(
        args.itemId,
        args.coordinateX,
        args.coordinateY,
        args.price,
        args.name,
        args.description,
        args.locationName
      );
    },

    deleteItem: async (parent, args) => {
      return await Organization.deleteItem(args.itemId);
    }
  }
};

module.exports = {
  organizationResolvers
};
