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
    active:DataTypes.BOOLEAN,
    user_id:DataTypes.INTEGER
},{tableName:"role",timestamps:false})
Role.associate = (models) =>{
    Role.belongsTo(models.user,{
        contraint:true,
        foreinKey:'user_id',
        as:'user'
    })
}
return Role;
}