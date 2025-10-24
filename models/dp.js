const Sequelize = require("sequelize");
const mysql2 = require("mysql2");
/*Usuario usado para acessar o MySQL e criar o banco de dados prosel*/
const usuario = "";
/*Senha do usuario*/
const senha = "";

const sequelize = new Sequelize("prosel", usuario, senha, {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
