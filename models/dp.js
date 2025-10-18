const Sequelize = require("sequelize");
const mysql2 = require("mysql2");
const usuario = "root";
const senha = "Mb191216";

const sequelize = new Sequelize("prosel", usuario, senha, {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
