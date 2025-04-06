
let carrinho = [];

function adicionarAoCarrinho(item, preco) {
  carrinho.push({ item, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const ul = document.getElementById("itens-carrinho");
  ul.innerHTML = "";
  let total = 0;
  carrinho.forEach(({ item, preco }) => {
    const li = document.createElement("li");
    li.textContent = `${item} - R$ ${preco.toFixed(2)}`;
    ul.appendChild(li);
    total += preco;
  });
  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;

  const msg = encodeURIComponent("Olá, gostaria de pedir:\n" + carrinho.map(c => `- ${c.item} (R$ ${c.preco.toFixed(2)})`).join("\n") + `\nTotal: R$ ${total.toFixed(2)}`);
  document.getElementById("whatsapp-link").href = `https://wa.me/?text=${msg}`;
}

function mostrarCarrinho() {
  document.getElementById("carrinho").classList.remove("hidden");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.add("hidden");
}
