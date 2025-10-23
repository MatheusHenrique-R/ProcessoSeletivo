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

// Função de validação
function validarDadosProduto(nome, preço, categoria) {
  const erros = [];

  if (!nome || typeof nome === "undefined" || nome === null) {
    erros.push({ texto: "Nome inválido" });
  }

  if (!preço || typeof preço === "undefined" || preço === null || preço <= 0) {
    erros.push({ texto: "preço inválido" });
  }

  if (!categoria || typeof categoria === "undefined" || categoria === null) {
    erros.push({ texto: "Categoria inválido" });
  }

  return erros;
}

// Serviço para criar um novo produto
async function criarProduto(dadosProduto) {
  const { nome, preço, categoria } = dadosProduto;
  const erros = validarDadosProduto(nome, preço, categoria);

  if (erros.length > 0) {
    return { sucesso: false, erros: erros };
  }

  try {
    const novoProduto = await Produto.create({
      nome: nome,
      preço: preço,
      categoria: categoria,
    });
    return { sucesso: true, produto: novoProduto };
  } catch (error) {
    console.error("Erro no serviço de registro de produto", error);
    throw new Error("Falha ao registrar o produto!");
  }
}

// Serviço para atualizar um produto existente
async function atualizarProduto(id, dadosProduto) {
  const { nome, preço, categoria } = dadosProduto;
  const erros = validarDadosProduto(nome, preço, categoria);

  if (erros.length > 0) {
    return { sucesso: false, erros: erros };
  }

  try {
    const editProduto = await Produto.findOne({
      where: { id: id },
      raw: false,
    });

    if (!editProduto) {
      return {
        sucesso: false,
        mensagem: "Este produto não existe",
      };
    }

    editProduto.nome = nome;
    editProduto.preço = preço;
    editProduto.categoria = categoria;
    await editProduto.save();

    return { sucesso: true, produto: editProduto };
  } catch (error) {
    console.error("Erro no serviço de atualização de produto:", error);
    throw new Error("Houve um erro ao tentar atualizar o produto.");
  }
}

// Serviço para deletar um produto
async function deletarProduto(id) {
  try {
    const resultado = await Produto.destroy({ where: { id: id } });
    if (resultado === 0) {
      throw new Error("Nenhum produto encontrado com o ID fornecido.");
    }
    return { sucesso: true };
  } catch (error) {
    console.error("Erro no serviço de exclusão de produto", error);
    throw new Error("Houve um erro ao deletar o produto.");
  }
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
