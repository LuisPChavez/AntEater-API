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

  static async addOrg(name, email, description) {
    console.log(name, email, description);
  }

  //   static getBookFromTitle(author) {
  //     for (let i = 0; i < books.length; i++) {
  //       if (books[i].author == author) {
  //         return [books[i]];
  //       }
  //     }
  //   }
}

module.exports = {
  Organization
};
