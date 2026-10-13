/*
console.log("teste") // usado só pra testar, aparece no console
alert("alerta") // não é frequentemente usado, é feio
prompt("123") // alert + input
*/

const footer = document.getElementById("rodape") //pega o item do id html
console.log(footer)

const h2Criado = document.createElement("h2") //cria um item html dentro do javascript
h2Criado.textContent = "Criando um H2 no footer" // adiciona um texto dentro de um item
footer.appendChild(h2Criado) // coloca o item criado no DOM html

h2Criado.addEventListener("click", () => {
    alert("funcionou")
})

const forms = document.getElementById("formulario")
forms.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("não enviou nada")
})

footer.addEventListener("mouseover", () => {
    alert("oi 1294i4")
})