/* 
   .: Expressões  e Operadores :.

- Expressions
- Operators

*/

let number = 1

// Binary - existem dois operadores
console.log(number + 1)

// Unary - existe apenas um operador
console.log(++number)

// Ternary - exitem três operadores -> caso único no js
console.log(true ? 'alo' : 'nada')
console.log(false ? 'alo' : 'nada')


/*
    new

    *left-hand-side expression
    * criar um novo objeto

*/

let name = new String("Monara")
name.surName = "Brito"
let age = new Number(24)
console.log(name,age)

let date = new Date('2021-08-06')
console.log(date)


/*
    operadores unários
    typeof
    delete
*/

// verifica o tipo de dado
console.log(typeof 'Monara')

const person = {
    name: 'Monara',
    age: 24,
}

console.log(person)
// deleta uma propriedade
delete person.age
console.log(person)
