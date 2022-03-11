'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:Sequelize.STRING,
      email: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("User")
}
};
