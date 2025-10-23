const express = require("express");
const router = express.Router();
const ProdutoService = require("../services/ProdutoServices");

// Rota para listar todos os produtos
router.get("/produtos", async function (req, res) {
  try {
    const produtos = await ProdutoService.listarProdutos();
    res.render("api/produtos", { produtos: produtos });
  } catch (error) {
    req.flash("error_msg", error.message);
    res.redirect("/api/produtos");
  }
});

// Rota para buscar um produto por ID
router.get("/produtos/:id", async function (req, res) {
  const id = req.params.id;

  try {
    const produto = await ProdutoService.buscarProdutoPorId(id);

    if (produto) {
      res.render("api/pesquisaProduto", { produto: produto });
    } else {
      req.flash("error_msg", "Produto não encontrado!");
      res.redirect("/api/produtos");
    }
  } catch (error) {
    req.flash("error_msg", error.message);
    res.redirect("/api/produtos");
  }
});

module.exports = router;
