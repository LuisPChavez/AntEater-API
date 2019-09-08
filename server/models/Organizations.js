const mongoose = require("mongoose");

class Organization {
  static async all() {
    const Organization = mongoose.model("Organizations");
    return await Organization.find();
  }

  static async findOrgByName(orgName) {
    const Organization = mongoose.model("Organizations");
    return await Organization.find({ name: orgName });
  }

  static async addOrganization(name, email, description) {
    const Organization = mongoose.model("Organizations");
    const newOrg = await new Organization({
      name,
      email,
      description
    }).save();
    return [newOrg];
  }

  static async editOrganization(organizationId, name, description) {
    const Organization = mongoose.model("Organizations");
    const changes = {
      ...(name ? { name } : {}),
      ...(description ? { description } : {})
    };

    const updatedOrg = await Organization.findOneAndUpdate(
      { _id: organizationId },
      changes,
      { new: true }
    );

    return [updatedOrg];
  }

  static async deleteOrganization(organizationId) {
    const Organization = mongoose.model("Organizations");
    const orgId = { _id: organizationId };

    const deletedOrganization = await Organization.deleteOne(orgId);
    if (deletedOrganization.deletedCount === 0) {
      throw new Error("Id not found");
    }
    return [orgId];
  }

  static async addItemToOrganization(
    organizationId,
    coordinateX,
    coordinateY,
    price,
    name,
    description,
    locationName
  ) {
    const item = {
      coordinateX,
      coordinateY,
      price,
      name,
      description,
      locationName
    };

    const updatedOrg = await Organization.findOneAndUpdate(
      { _id: organizationId },
      { $push: { items: item } },
      { new: true, runValidators: true }
    );

    const newItem = updatedOrg.items[org.items.length - 1];
    return [newItem];
  }
}

module.exports = {
  Organization
};
