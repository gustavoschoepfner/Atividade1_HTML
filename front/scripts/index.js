// POST

async function criar() {
  const id = document.getElementById("id").value;
  const cpf = document.getElementBycpf("cpf").value;
  const email = document.getElementById("email").value;

  const response = await fetch("http://localhost:3000/api/v1/pessoa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, cpf, email }),
  });

  const data = response.json;

  console.log(data.message);
}

// GET

async function buscarTodos() {
  const response = await fetch("http://localhost:3000/api/v1/pessoa");
  const data = await response.json();

  console.log(data);

  const lista = document.getElementById("ListaUsuarios")
  lista.innerHTML = ""

  data.pessoas.forEach(pessoa => {
    const li = document.createElement("li")
    li.innerText = "ID: " + pessoa.id + "CPF: " + pessoa.cpf + "Email: " + pessoa.email
  })
}

//PUT

function alterar() {
  alert("oi");
}

//DELETE

function deletar() {
  alert("oi");
}
