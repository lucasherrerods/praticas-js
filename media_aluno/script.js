let nomeAluno = document.querySelector('#aluno')

function calcularMedia() {
    let primeiraNota = Number(document.querySelector('#nota1').value)
    let segundaNota = Number(document.querySelector('#nota2').value)

    let resultado = (primeiraNota + segundaNota) / 2
    if (primeiraNota == 0 || segundaNota == 0) {
        alert('Por favor, preencha os dados')
    }    else if (primeiraNota > 10 || segundaNota > 10) {
        alert('Número inválido, nota maior que 10')
    }     
    return resultado
}

function exibirResultado(event) {
    event.preventDefault()

    let nome = nomeAluno.value

    let media = calcularMedia()

    let resultadoDiv = document.querySelector('#resultado')

    if (nome === '') {
        alert('Por favor, preencha os dados')
        return
    }

    let situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
    resultadoDiv.innerHTML = `Aluno: ${nome} - Média: ${media} - Status: ${situacao}`

    if (situacao === 'Aprovado') {
        resultadoDiv.style.backgroundColor = '#c8e6c9'
    }   else {
        resultadoDiv.style.backgroundColor = '#ffcdd2'
    }
}

document.querySelector('#btn').addEventListener('click', exibirResultado)