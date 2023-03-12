const reservarIngressoBtn = document.querySelector(".modal1");
const modal = document.getElementById("modal");
const form = modal.querySelector("#form1");

// function abrirModal() {
//   modal.style.display = "block";
// }

async function reservarIngresso(e) {
  e.preventDefault();
  const nome = form.querySelector("#nome").value;
  const email = form.querySelector("#email").value;

  const resposta = await fetch("https://soundgarden-api.vercel.app/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  if (resposta.ok) {
    alert("Ingresso reservado com sucesso!");
    modal.style.display = "none";
  } else {
    alert("Erro ao reservar ingresso. Por favor, tente novamente.");
  }
}

reservarIngressoBtn.addEventListener("click", abrirModal);
form.addEventListener("submit", reservarIngresso);
