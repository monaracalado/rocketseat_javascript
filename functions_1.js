// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

// sum(2, 3) // arguments - argumentos

let number1 = 34
let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)


// explicação lúdica
// função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maçã ')

console.log(copo)