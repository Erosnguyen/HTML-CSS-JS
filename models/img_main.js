"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class img_main extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      img_main.belongsTo(models.detailproduct);
    }
  }
  img_main.init(
    {
      source: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      detailproductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "img_main",
    }
  );
  img_main.sync({ alter: true });
  return img_main;
};
