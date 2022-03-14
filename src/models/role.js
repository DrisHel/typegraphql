const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
const Role = sequelize.define('Role', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false

    },
    name:DataTypes.STRING,
    active:DataTypes.BOOLEAN
},{tableName:"role",timestamps:false})
return Role;
}