"use strict";
const config = require("../config/database/config");
const { Sequelize } = require("sequelize");
const User = require("./user");
const Role = require("./role");
const sequelize = new Sequelize(config);
const user = User(sequelize);
const role = Role(sequelize);
module.exports = {
    user, role
};
