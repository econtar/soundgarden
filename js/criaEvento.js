const URL = 'https://soundgarden-api.vercel.app';

const inputName = document.getElementById('nome');
const inputBanner = document.getElementById('poster');
const inputAtracoes = document.getElementById('atracoes');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const inputLotacao = document.getElementById('lotacao');
const inputBtn = document.querySelector('btn btn-primary');
const form = document.querySelector('#form-new-event');

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const novoEvento = {

    name: inputName.value,
    poster: inputBanner.value,
    attractions: inputAtracoes.value.split(","),
    description: inputDescricao.value,
    scheduled: inputData.value.slice(0, 16),
    number_tickets: inputLotacao.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(novoEvento),
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const resposta = await fetch(`${URL}/events/`, options);
  const conteudoResposta = await resposta.json();
  console.log(conteudoResposta);

  if (resposta.status == 201) {
    alert("Evento cadastrado com sucesso!");
    window.location.href = "admin.html";

    inputName.value = "";
    inputBanner.value = "";
    inputAtracoes.value = "";
    inputDescricao.value = "";
    inputData.value = "";
    inputLotacao.value = "";
  }
};
