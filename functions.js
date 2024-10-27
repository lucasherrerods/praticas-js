// 1 - SAUDAÇÃO
function greeting(name) {
    let greetingText = console.log(`Olá, ${name}`)
    return greetingText
}
greeting('Isabelle')

// 2 - SOMA
function somar(n1, n2) {
    let soma = n1 + n2
    return soma
}
console.log(somar(20, 90))

// 3 - PAR OU IMPAR
function parOuImpar(number) {
    if (number % 2 == 0) {
        return 'Par'
    }
        return 'Ímpar'
}
console.log(parOuImpar(14))

// 4 - FATORIAL
function fatorial(number) {
    let fat = 1
    for(c = number; c >= 1; c--) {
        fat *= c
    }
    return `O fatorial de ${number} é ${fat}`
}
console.log(fatorial(5))

// 5 - MAIOR NUMERO
function maiorNumero(n1, n2) {
    let maior = Math.max(n1, n2)
    return `O maior número é ${maior}`
}
console.log(maiorNumero(500, 499))

// 6 - INVERSAO DE STRING
function invertString(str) {
    let stringArray = str.split('')
    let invertArray = stringArray.reverse()
    let stringAgain = invertArray.join('')
    return stringAgain
}
console.log(invertString('Subino on ibus')) 

// 7 - PALINDROMO
function palindromo(str) {
    let stringArray = str.split('')
    let invertArray = stringArray.reverse()
    let stringAgain = invertArray.join('')
    if (stringAgain === str) {
        return `A palavra ${str} É um palindromo: ${stringAgain}`
    }   else {
        return `A palavra ${str} NÃO É um palindromo.`
    } 
}
console.log(palindromo('renner'))

// 8 - CONCATENAR ARRAYS 
function concatenarArrays(...arrays) {
    let concatenados = [].concat(...arrays)
    return concatenados
}
console.log(concatenarArrays(['Comida'], ['Animal'], ['Carro'], ['Bola']))