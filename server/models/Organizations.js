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
    console.log(newOrg);
    return [newOrg];
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
    console.log(
      organizationId,
      coordinateX,
      coordinateY,
      price,
      name,
      description,
      locationName
    );
  }
}

module.exports = {
  Organization
};
