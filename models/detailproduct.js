"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class detailproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detailproduct.hasOne(models.img_main, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          allowNull: false,
        },
      });
      detailproduct.hasOne(models.img_sub, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  detailproduct.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "detailproduct",
      timestamps: false,
    }
  );
  detailproduct.sync({ alter: true });
  return detailproduct;
};
