'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('role','user_id', {
      type:Sequelize.INTEGER,
      references:{
        model:'user',
        key:'id',
 
      }
     
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('role', 'user_id')
  }
};
