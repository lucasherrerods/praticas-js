let nomeAluno = document.querySelector('#aluno')

function calcularMedia() {
    let primeiraNota = Number(document.querySelector('#nota1').value)
    let segundaNota = Number(document.querySelector('#nota2').value)

    let resultado = (primeiraNota + segundaNota) / 2
    return resultado
}

function exibirResultado() {
    let nome = nomeAluno.value

    let media = calcularMedia()

    let resultadoDiv = document.querySelector('#resultado')

    if (nome === '') {
        alert('Por favor, preencha os dados')
        return
    }

    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
    resultadoDiv.innerHTML = `Aluno: ${nome} - Média: ${media} - Status: ${situacao}`
}

document.querySelector('#btn').addEventListener('click', exibirResultado)