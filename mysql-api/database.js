const mysql = require("mysql2");
const Sequelize = require("sequelize");

const config = {
  dbName: process.env.DB_NAME,
  dbPwd: process.env.DB_PWD,
  dbUser: process.env.DB_USER,
  dbHost: "mysql-server",
  appEnv: process.env.APP_ENV,
};

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPwd, {
  dialect: "mysql",
  host: config.dbHost,
  charset: "utf8",
  collate: "utf8_general_ci",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
});



module.exports = sequelize;
