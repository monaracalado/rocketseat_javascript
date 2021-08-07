// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// condição então valor1 se não valor2
// condition ? value1 : value2

// exemplos
// café da manhã top
let pao = false
let queijo = true

const breakfast  = pao && queijo ? 'Café top' : 'Café ruim'
console.log(breakfast)

const niceBreakfast  = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Maior de 18

let age = 18

const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)