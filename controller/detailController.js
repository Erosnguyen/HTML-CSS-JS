const { Op } = require("sequelize");
const db = require("../models/");
let productRoute = async (req, res) => {
  try {
    const data = await db.detailproduct.findOne({
      where: {
        id: req.query.id,
      },
    });
    const img_sub = await db.img_sub.findOne({
      where: {
        detailproductId: req.query.id,
      },
    });
    return res.render("layouts/product", {
      data: data,
      img_sub: img_sub,
    });
  } catch (error) {
    console.log(error);
  }
};

let allProductRoute = async (req, res) => {
  try {
    const data = await db.detailproduct.findAll();
    return res.render("layouts/allProduct", {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  productRoute: productRoute,
  allProductRoute: allProductRoute,
};
