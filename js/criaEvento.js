// SELECIONAR O FORMULÁRIO DA PÁGINA HTML

const form = document.querySelector("#form-new-event");

// FUNÇÃO DE ENVIO DE EVENTO (post)

async function sendNewEvent(formData) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("https://soundgarden-api.vercel.app/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        resolve(res);
      } catch (error) {
        reject(null);
      }
    });
  }

form.addEventListener("submit", async (e) => {

  e.preventDefault(); // impedir que a página faça ações padrão

  try {
    const formData = validateFormData({
      name: form.elements["nome"],
      poster: form.elements["banner"],
      attractions: form.elements["atracoes"],
      description: form.elements["descricao"],
      scheduled: form.elements["data"],
      number_tickets: form.elements["lotacao"],
    });

    const res = await sendNewEvent(formData);
    
    if (res.ok) {
      alert("Evento cadastrado com sucesso.");
      form.reset();
    } else {
      alert(
        "Houve uma falha com a requisição, por favor tente novamente mais tarde."
      );
    }
  } catch (error) {
    alert(
      "Houve um erro ao cadastrar este evento, por favor revise os dados fornecidos"
    );
  }
});

