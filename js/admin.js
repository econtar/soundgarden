
const URL = 'https://soundgarden-api.vercel.app';

async function getEvents() {
    try {
        const tabela = document.querySelector("tbody");
        const resposta = await fetch(`${URL}/events`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
   });

    console.log(resposta);

    const dataCorreta = (date) => {
        const data = new Date(date);
        const dataArrumada = data.toLocaleDateString('pt-BR');
        const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return `${dataArrumada} ${hora}`;
    };

    const conteudoResposta = await resposta.json();
        conteudoResposta.forEach((item) => {
        tabela.innerHTML += `<tr>
        <th scope="row">${conteudoResposta.indexOf(item) + 1}</th>
        <td>${dataCorreta(item.scheduled)}</td>
        <td>${item.name}</td>
        <td>${item.attractions}</td>
        <td>
            <a href="reservas.html?id=${
                item._id
            }" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${
                item._id
            }" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${
                item._id
            }" class="btn btn-danger">excluir</a>
        </td>
        </tr>`;
    });
    }
    catch(error) {
        alert('Ocoreu um erro!');
    };
};

getEvents();