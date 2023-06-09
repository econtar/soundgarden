
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
        let data = date.split("");
        let dataArrumada = data.slice(8, 10).join("") + "/" + data.slice(5, 7).join("") + "/" + data.slice(0, 4).join("");
        let hora = data.slice(11, 13).join("") + ":" + data.slice(14, 16).join("");
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