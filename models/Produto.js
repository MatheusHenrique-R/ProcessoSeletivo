const dp = require("./dp");

const Produto = dp.sequelize.define("Produto", {
  nome: {
    type: dp.Sequelize.STRING,
    allowNull: false,
  },
  preço: {
    type: dp.Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  categoria: {
    type: dp.Sequelize.STRING,
    allowNull: false,
  },
});

//Apagar ou comentar a linha abaixo apos rodas o app.js
//Produto.sync({ force: true });

module.exports = Produto;
