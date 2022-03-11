const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false

    },
    name:DataTypes.STRING,
    email:DataTypes.STRING
},{tableName:"user",timestamps:false})
return User;
}