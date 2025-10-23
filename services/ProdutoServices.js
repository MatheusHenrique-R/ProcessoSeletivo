const Produto = require("../models/Produto");
const { ProdutoOutputDTO } = require("../dtos/ProdutoDTO");

// Serviço para listar todos os produtos
async function listarProdutos() {
  try {
    const produtos = await Produto.findAll();
    return ProdutoOutputDTO.fromList(produtos);
  } catch (error) {
    console.error("Erro no serviço de listagem de produtos", error);
    throw new Error("Falha ao listar os produtos.");
  }
}

module.exports = {
  listarProdutos,
};
