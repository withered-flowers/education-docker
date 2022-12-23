const { SECOND_SERVER_URL } = require("../constants/config");

const typeDefs = `#graphql
  type LoremIpsum {
    name: String!
    quantity: Int!
  }

  type Query {
    loremIpsums: [LoremIpsum!]!
    }
`;

const resolvers = {
  Query: {
    loremIpsums: async () => {
      const response = await fetch(`${SECOND_SERVER_URL}`);
      const responseJson = await response.json();

      return responseJson.data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
