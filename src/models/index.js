const config = require("../config/database/config");
const {Sequelize } = require("sequelize");
const User = require("./user");


const sequelize = new Sequelize(config);
const user = User(sequelize);

module.exports = {
    user
}