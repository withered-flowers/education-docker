const { FIRST_SERVER_URL } = require("../constants/config");

const typeDefs = `#graphql
  type Task {
    id: ID!
    name: String!
    description: String!
    isCompleted: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    tasks: [Task!]!
  }
`;

const resolvers = {
  Query: {
    tasks: async () => {
      const response = await fetch(`${FIRST_SERVER_URL}/api`);
      const tasks = await response.json();

      return tasks;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
