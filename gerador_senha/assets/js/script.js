let slider = document.querySelector('#slider')
let button = document.querySelector('#button')

let sizePassword = document.querySelector('#size')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#' //caracteres aceitos na geração de senha
let newPassword = ''

sizePassword.innerHTML = slider.value

slider.oninput = function() { //mudar dinamicamente o valor do range
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    let pass = ''

    for(let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n)) //acessar index dos caracteres gerando um numero inteiro aleatório
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
}

function copyPassword() {
    alert('Senha copiada!')
    navigator.clipboard.writeText(newPassword) //copiar a senha para sua área de transferência
}