const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const mongoose = require("mongoose");

require("./schema/Organization");
const { mongoURI } = require("./keys");

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true });

// const Organization = mongoose.model("Organizations");
// new Organization({
//   id: "testID",
//   name: "testOrg",
//   email: "test@test.com",
//   description: "test description"
// }).save();

// (async () => {
//   const all = await Organization.find();
//   console.log(all);
// })();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
