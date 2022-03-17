const { DataTypes, Association } = require("sequelize")

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
User.associate = function(models){
    User.hasMany(models.role,{
       as:'roles',
       foreignKey:'user_id'
    
      });
}
return User;
}