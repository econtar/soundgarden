// CHAMANDO A API

const URL = 'https://soundgarden-api.vercel.app';

const inputName = document.getElementById('nome');
const inputBanner = document.getElementById('banner');
const inputAtracoes = document.getElementById('atracoes');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const inputLotacao = document.getElementById('lotacao');
const inputBtn = document.querySelector('btn btn-primary');
const form = document.querySelector('form');

const id = new URLSearchParams(window.location.search).get("id");

// PREENCHENDO OS CAMPOS COM AS INFORMAÇÕES DA API
async function listarEvento(id) {
    try {
        const resposta = await fetch(`${URL}/events/${id}`);
        const conteudoResposta = await resposta.json();
        const { name, poster, attractions, description, scheduled, number_tickets } = conteudoResposta;

        inputName.value = name;
        inputBanner.value = poster;
        inputAtracoes.value = attractions;
        inputDescricao.value = description;
        inputData.value = scheduled.slice(0, 16);
        inputLotacao.value = number_tickets;
    } catch (erro) {
        console.error(erro);
        alert("Ocorreu um erro ao carregar os dados do evento. Tente novamente mais tarde.");
    }
}

listarEvento(id);

// FUNÇÃO DE DELETAR O EVENTO 
form.onsubmit = async (evento) => {
    evento.preventDefault(); // PREVENINDO QUE A PAGINA RECARREGUE ANTES DE CONFIRMAR AO CLICAR EM EXCLUIR

    const confirmacao = confirm("Tem certeza que deseja excluir o evento?");

    try {
        if (confirmacao) {
            const options = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                redirect: "follow",
            };
    
            const resposta = await fetch(`${URL}/events/${id}`, options);
            if (resposta.status == 204) {
                alert("Evento excluído com sucesso!!");
                window.location.href = "admin.html";
            }
        }
    }
    catch(error) {
        alert('algo saiu errado!')
    }
};
