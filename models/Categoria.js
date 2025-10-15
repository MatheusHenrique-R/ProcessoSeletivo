const dp = require("./index");

const Categoria = dp.sequelize.define("Categoria", {
  Nome: {
    type: dp.Sequelize.STRING,
    allowNull: false,
  },
  freezeTableName: true,
});

//Apagar ou comentar a linha logo abaixo
Categoria.sync({ force: true });

module.exports = Categoria;
