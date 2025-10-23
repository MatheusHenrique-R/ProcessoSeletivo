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

// Serviço para buscar um produto por ID
async function buscarProdutoPorId(id) {
  try {
    const produto = await Produto.findOne({ where: { id: id } });
    return produto ? new ProdutoOutputDTO(produto) : null;
  } catch (error) {
    console.error("Erro no serviço de pesquisa de produto", error);
    throw new Error("Falha ao procurar o produto.");
  }
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
};
