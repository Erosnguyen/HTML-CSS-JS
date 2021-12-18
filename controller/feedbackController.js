const CRUD = require("../CRUD");
const db = require("../models/index");
const postFB = async (req, res) => {
  await CRUD.createUser(req.body);
  const dataFb = await CRUD.showCmt();
  return res.render("layouts/feedback.ejs", {
    dataFb: dataFb,
  });
};
const getFB = async (req, res) => {
  const dataFb = await CRUD.showCmt();
  try {
    return res.render("layouts/feedback.ejs", {
      dataFb: dataFb,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteFeedback = async (req, res) => {
  const id = req.query.id;
  const dataFb = CRUD.showCmt();
  await CRUD.deleteFeedback(id);
  res.render("layouts/feedback", {
    dataFb: dataFb,
  });
};
module.exports = {
  getFB: getFB,
  postFB: postFB,
  deleteFeedback: deleteFeedback,
};
