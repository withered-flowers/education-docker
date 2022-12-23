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
      const response = await fetch(`${SECOND_SERVER_URL}/api`);
      const loremIpsums = await response.json();

      return loremIpsums;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
