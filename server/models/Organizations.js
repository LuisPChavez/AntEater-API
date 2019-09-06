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

  static async addItemToOrganization(
    organizationId,
    coordinateX,
    coordinateY,
    price,
    name,
    description,
    locationName
  ) {
    const Organization = mongoose.model("Organizations");
    const item = {
      coordinateX,
      coordinateY,
      price,
      name,
      description,
      locationName
    };

    console.log(item);
    return [item];
    Organization.findOneAndUpdate(
      { _id: organizationId },
      { $push: { items: item } },
      { new: true },
      (err, org) => {
        if (err) {
          console.log(err);
        } else {
          console.log(org.items[org.items.length - 1]);
          return [org.items[org.items.length - 1]];
        }
      }
    );
  }
}

module.exports = {
  Organization
};
