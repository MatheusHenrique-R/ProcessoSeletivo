class ProdutoOutputDTO {
  constructor(produto) {
    this.id = produto.id;
    this.nome = produto.nome;
    const preçoNumerico = parseFloat(produto.preço);
    if (!isNaN(preçoNumerico) && preçoNumerico >= 0) {
      this.preçoFormatado = `R$ ${preçoNumerico.toFixed(2).replace(".", ",")}`;
    } else {
      this.preçoFormatado = "N/A";
    }
    this.preçoNumerico = produto.preço;
    this.categoria = produto.categoria;
    this.dataCriacao = produto.createdAt
      ? new Date(produto.createdAt).toLocaleDateString("pt-BR")
      : "";
  }

  // Método estático para converter uma lista de produtos
  static fromList(produtos) {
    if (!produtos) return [];
    return produtos.map((produto) => new ProdutoOutputDTO(produto));
  }
}

class ProdutoInputDTO {
  constructor(data) {
    this.nome = data.nome ? String(data.nome) : null;
    this.preço = data.preço ? parseFloat(data.preço) : null;
    this.categoria = data.categoria ? String(data.categoria) : null;
  }
}

module.exports = { ProdutoOutputDTO, ProdutoInputDTO };
