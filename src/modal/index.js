const fundo = document.querySelector(".full");
const reservarIngressoBtn = document.querySelector("#show1", "#show2", "#show3");
const modal = document.getElementById("modal");
const head = document.getElementById("modal-header");
const h2 = document.getElementById("h2");
const form = document.getElementById("form1");
const botao = document.getElementById("mb");
const foot = document.getElementById("modal-footer");
        
function abrirModal() {
  modal.style.display = "block";
  fundo.style.opacity = "0.1";
  modal.style.marginTop = "2%";
  modal.style.padding = "3% 30%";
  head.style.backgroundColor = "#C2185B";
  head.style.padding = "1% 2%";
  head.style.color = "#fff";
  head.style.borderRadius = "5px";
  h2.style.marginLeft = "7%";
  h2.style.fontSize = "3rem";
  form.style.padding = "3% 3%";
  botao.style.backgroundColor = "#C2185B";
  botao.style.border = "none";
  botao.style.color = "#fff";
  botao.style.margin = "2% 0%";
  botao.style.borderRadius = "5px";
  foot.style.backgroundColor = "#C2185B";
  foot.style.padding = "2% 2%";
  foot.style.marginTop = "2%"
  foot.style.borderRadius = "5px";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
fundo.style.opacity = "1";
  }
}

reservarIngressoBtn.addEventListener("click", abrirModal);

// código "caso" do formulário
async function reservarIngresso(e) {
  e.preventDefault();
  const nome = form.querySelector("#nome").value;
  const email = form.querySelector("#email").value;

  const resposta = await fetch("/reservar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  if (resposta.url) {
    alert("Ingresso reservado com sucesso!");
    modal.style.display = "none";
    fundo.style.opacity = "1";
  } else {
    alert("Erro ao reservar ingresso. Por favor, tente novamente.");
  }
}

reservarIngressoBtn.addEventListener("click", abrirModal);
form.addEventListener("submit", reservarIngresso);