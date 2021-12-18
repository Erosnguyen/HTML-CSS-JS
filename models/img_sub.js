"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class img_sub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      img_sub.belongsTo(models.detailproduct);
    }
  }
  img_sub.init(
    {
      source1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detailproductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "img_sub",
      timestamps: false,
    }
  );
  img_sub.sync({ alter: true });
  return img_sub;
};
