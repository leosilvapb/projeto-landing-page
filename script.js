function enviar(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Acessa os elementos do formulário pelo ID
    const nome = document.getElementById("nome")
    const numero = document.getElementById("numero")
    const email = document.getElementById("email")

    // Verifica se os campos estão preenchidos corretamente
    if (nome.value.trim() === "" || numero.value.trim() === "" || email.value.trim() === "") {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return;
    }

    // Verifica se o e-mail é válido
    if (!isValidEmail(email.value.trim())) {
        alert("Por favor, insira um e-mail válido.")
        return
    }

    // Exibe um alerta com os dados enviados
    alert(`Entraremos em contato através do endereço ${email.value.trim()}`)

    // Limpa os campos do formulário
    nome.value =""
    numero.value =""
    email.value =""
}

// Função para verificar se o e-mail é válido
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Adiciona um evento de submit ao formulário para enviar os dados
const formulario = document.querySelector(".formulario")
formulario.addEventListener("submit", enviar)