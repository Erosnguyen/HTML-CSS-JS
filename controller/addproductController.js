const db = require("../models");
const CRUD = require("../CRUD");
const showProduct = (req, res) => {
  res.render("layouts/addproduct");
};
const addProduct = async (req, res) => {
  await CRUD.addProduct(req.body);
  const data = await db.detailproduct.findAll();
  const render = new Promise((resolve, reject) => {
    try {
      resolve(
        res.render("layouts/allproduct", {
          data: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  });
  return render;
};
module.exports = {
  showProduct: showProduct,
  addProduct: addProduct,
};
