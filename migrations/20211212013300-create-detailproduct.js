"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("detailproducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("detailproducts");
  },
};
