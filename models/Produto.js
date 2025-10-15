const dp = require("./index");

const Produto = dp.sequelize.define("Produtos", {
  Nome: {
    type: dp.Sequelize.STRING,
    allowNull: false,
  },
  Preço: {
    type: dp.Sequelize.DOUBLE,
    allowNull: false,
  },
  Categoria: {
    type: dp.Sequelize.INTEGER,
    references: {
      model: "Categoria",
      key: "id",
    },
  },
  freezeTableName: true,
});

//Apagar ou comentar a linha logo abaixo
Produto.sync({ force: true });

module.exports = Produto;
