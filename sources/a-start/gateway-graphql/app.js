// create apollo server
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const {
  typeDefs: taskTypeDefs,
  resolvers: taskResolvers,
} = require("./schemas/TaskSchema");

const {
  typeDefs: loremIpsumTypeDefs,
  resolvers: loremIpsumResolvers,
} = require("./schemas/LoremIpsumSchema");

const server = new ApolloServer({
  typeDefs: [taskTypeDefs, loremIpsumTypeDefs],
  resolvers: [taskResolvers, loremIpsumResolvers],
});

(async () => {
  // start server
  const { url } = await startStandaloneServer(server, {
    port: 4000,
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
