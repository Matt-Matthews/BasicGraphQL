const {Item} = require("../models");

const resolvers = {
    Query: {
        allItems: async () => await Item.findAll(),
    },
    Mutation: {
        createItem: async (_, {name, description}) => {
            const item  = await Item.create({name, description});
            return item;
        }
    }
}

module.exports = resolvers;