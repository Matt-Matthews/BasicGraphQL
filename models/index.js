const {Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgres_db", "postgres", "MySecretPass", {
    host: "localhost",
    dialect: "postgres"
});

const Item = require("./item")(sequelize, Sequelize);

sequelize.sync();

module.exports = {sequelize, Item};