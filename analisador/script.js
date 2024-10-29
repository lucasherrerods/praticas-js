    let userNumbers = []
    let result = document.querySelector('#resultArea')

    function analyzingNumbers() {

        const userNumber = Number(document.querySelector('#inputNumber').value)

        if (userNumber < 1 || userNumber > 100 || userNumbers.includes(userNumber)) {
            alert('Valor inválido ou ja encontrado na lista.')
            option = ''
        } else {
            userNumbers.push(userNumber)

            let option = document.createElement('option')
            option.text = `Valor ${userNumber} adicionado.`
            document.querySelector('#selNumber').append(option)
        }
        document.querySelector('#inputNumber').value = ''
        document.querySelector('#inputNumber').focus()
    }

    function addResults() {
        if (userNumbers.length == 0) {
            alert('Adicione valores antes de finalizar!')
        } else {
            let total = userNumbers.length
            let bigger = userNumbers[0]
            let small = userNumbers[0]
            let sum = 0
            let media = 0

            for (let position in userNumbers) {
                sum += userNumbers[position]

                if (userNumbers[position] > bigger) {
                    bigger = userNumbers[position]
                }

                if (userNumbers[position] < small) {
                    small = userNumbers[position]
                }
            }
            media = sum / total

            result.innerHTML = `<p>Ao todo, temos <strong>${total}</strong> números cadastrados.</p>`
            result.innerHTML += `<p>O maior valor informado foi <strong>${bigger}</strong>.</p>`
            result.innerHTML += `<p>O menor valor informado foi <strong>${small}</strong>.</p>`
            result.innerHTML += `<p>Somando todos os valores, temos <strong>${sum}</strong>.</p>`
            result.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
        }
    }