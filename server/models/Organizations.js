const mongoose = require("mongoose");

class Organization {
  static async allOrganizations() {
    const Organization = mongoose.model("Organizations");
    return await Organization.find();
  }

  static async findOrganizationByName(organizationName) {
    const Organization = mongoose.model("Organizations");
    return await Organization.find({ name: organizationName });
  }

  static async getAllItemsFromOneOrganization(organizationId) {
    const Organization = mongoose.model("Organizations");
    const matchingOrganization = await Organization.findOne({
      _id: organizationId
    });

    if (matchingOrganization === null) {
      throw new Error("Organization not found!");
    }

    return matchingOrganization.items;
  }

  static async getAllItems() {
    const Organization = mongoose.model("Organizations");
    const allOrganizations = await Organization.find();
    let allItems = [];
    allOrganizations.forEach(organization => {
      allItems = [...allItems, ...organization.items];
    });

    return allItems;
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
    const orgChanges = {
      ...(name ? { name } : {}),
      ...(description ? { description } : {})
    };

    const updatedOrg = await Organization.findOneAndUpdate(
      { _id: organizationId },
      orgChanges,
      { new: true }
    );

    if (updatedOrg === null) {
      throw new Error("Organization not found!");
    }

    return [updatedOrg];
  }

  static async deleteOrganization(organizationId) {
    const Organization = mongoose.model("Organizations");
    const orgId = { _id: organizationId };

    const deletedOrganization = await Organization.deleteOne(orgId);
    if (deletedOrganization.deletedCount === 0) {
      throw new Error("Organization not found!");
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
    const Organization = mongoose.model("Organizations");
    const updatedOrg = await Organization.findOneAndUpdate(
      { _id: organizationId },
      { $push: { items: item } },
      { new: true, runValidators: true }
    );

    if (updatedOrg === null) {
      throw new Error("Organization not found!");
    }

    const newItem = updatedOrg.items[updatedOrg.items.length - 1];
    return [newItem];
  }

  static async editItem(
    itemId,
    coordinateX,
    coordinateY,
    price,
    name,
    description,
    locationName
  ) {
    const itemChanges = {
      ...(coordinateX ? { "items.$.coordinateX": coordinateX } : {}),
      ...(coordinateY ? { "items.$.coordinateY": coordinateY } : {}),
      ...(price ? { "items.$.price": price } : {}),
      ...(name ? { "items.$.name": name } : {}),
      ...(description ? { "items.$.description": description } : {}),
      ...(locationName ? { "items.$.locationName": locationName } : {})
    };

    const Organization = mongoose.model("Organizations");

    const updatedItems = await Organization.findOneAndUpdate(
      { "items._id": itemId },
      { $set: itemChanges },
      { new: true, runValidators: true }
    );

    if (updatedItems === null) {
      throw new Error("Organization not found!");
    }

    const updatedItem = updatedItems.items.find(item => {
      return item._id == itemId;
    });

    return [updatedItem];
  }

  static async deleteItem(itemId) {
    const item = { _id: itemId };
    const Organization = mongoose.model("Organizations");
    const updatedItems = await Organization.updateOne(
      {
        "items._id": itemId
      },
      {
        $pull: { items: { _id: itemId } }
      }
    );
    console.log(updatedItems);
    if (updatedItems.n === 0) {
      throw new Error("Item not found");
    }

    return [item];
  }
}

module.exports = {
  Organization
};
