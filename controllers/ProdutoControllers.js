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

module.exports = router;
