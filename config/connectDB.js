const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config();
const sequelize = new Sequelize('nodeproject',process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect: "mysql",
    operatorsAliases : false
})

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = connectDB;
