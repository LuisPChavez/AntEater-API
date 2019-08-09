const mongoose = require("mongoose");

class Organization {
  static async all() {
    const Organization = mongoose.model("Organizations");
    console.log("all ran");
    return await Organization.find();
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
