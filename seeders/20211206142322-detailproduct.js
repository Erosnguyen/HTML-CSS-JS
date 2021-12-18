"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("detailproducts", [
      {
        name: "Advanced Knife",
        img: "https://cuahangroidien.com/wp-content/uploads/2020/08/%C4%91ao-%C4%91%E1%BA%A7u-b%E1%BA%B1ng-si%C3%AAu-b%C3%A9n.jpg",
        price: 700000,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("detailproducts", null, {});
  },
};
