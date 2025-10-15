const dp = require("./index");

const Categoria = dp.sequelize.define("Categoria", {
  Nome: {
    type: dp.Sequelize.STRING,
    allowNull: false,
  },
  freezeTableName: true,
});

module.exports = Categoria;
