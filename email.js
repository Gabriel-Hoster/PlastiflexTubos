document.querySelector("#contact-form").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.querySelector("#nome").value
let email = document.querySelector("#email").value
let telefone = document.querySelector("#telefone").value
let mensagem = document.querySelector("#mensagem").value

let assunto = "Contato pelo site Plastiflex"

let corpo =
`Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}`

let mailto = `mailto:administrativo@plastiflex.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`

window.location.href = mailto

})