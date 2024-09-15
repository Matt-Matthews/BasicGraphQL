const express = require("express")
const {ApolloServer} = require("apollo-server-express");
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const {sequelize} = require('./models');

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        playground: false,
    });

    await server.start();
    server.applyMiddleware({app});

    app.listen({port: 4000}, () => {
        console.log(`Server ready at http:localhost4000${server.graphqlPath}`);
        console.log(`Apollo Sandbox available at http:localhost4000${server.graphqlPath}`);
    });

    sequelize.authenticate().then(()=> {
        console.log('Database connected');
    }).catch(err => {
        console.log(err);
    })
}

startServer();