// .: Manipulando Strings e Números :.

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para o outro tipo
*/

// corrige ao transformar o type number para um type string 
console.log('9' + 5)

// converte o type string para o type number
console.log(Number('9') + 5)



// Transformando Strings em Número e números em Strings
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))


// Contar quantos caracteres tem em um palavra e quantos dígitos tem em um número
let word = 'paralelepipedo'
console.log(word.length)
// number não recebe 'length' é necessario tranformar em string
let numbers = 1234
console.log(String(numbers).length)


// Tranformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number1 = 345.4575454545
console.log(number1.toFixed(2).replace(",", "."))


// Transformando letras minúculas em maiúculas e o contrário também.
let words = 'Programar é bacana!'
console.log(words.toUpperCase())
console.log(words.toLowerCase())