const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Item {
        id: ID!
        name: String!
        description: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        allItems: [Item!]!
    }

    type Mutation {
        createItem(name: String!, description: String): Item! 
    }
`;

//Query can get all items at once or get a sing item
//Mutation can create or delete items
module.exports = typeDefs;