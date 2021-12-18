const db = require("./models/index");
const { Op } = require("sequelize");
const createUser = async (data) => {
  await db.feedback.create({
    Message: data.Message,
    Name: data.Name,
    Email: data.Email,
  });
  console.log(data);
};
const showCmt = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = db.feedback.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
const deleteFeedback = async (data) => {
  await db.feedback.destroy({
    where: {
      id: data,
    },
    truncate: true,
  });
};
const addProduct = async (data) => {
  await db.detailproduct.create(
    {
      name: data.name,
      img: data.img,
      price: data.price,
      img_main: {
        source: data.img,
      },
      img_sub: {
        source1: data.subImg1,
        source2: data.subImg2,
        source3: data.subImg3,
        source4: data.subImg4,
      },
    },
    {
      include: [db.img_main, db.img_sub],
    }
  );
  console.log(data);
};
module.exports = {
  createUser: createUser,
  showCmt: showCmt,
  addProduct: addProduct,
  deleteFeedback: deleteFeedback,
};
