// .: Manipulando Strings e Array :. 


// Separe um texto que contem espaços, em um array onde cada palavra é uma posição do arry. Depois disso, transforme o arry em um texto e onde era espaço, coloque _
let phrase = "Eu quero viver um Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(myArray)
console.log(phraseWithUnderscore),

// Verificando se o texto contem a palavra Amor
console.log(`Existe a palvra Amor? ${phrase.includes("Amor")}`)


//.: Manipulando Arrays:.

// Criar Array com constructor
let newArray = ['a', 'b', 'c']
newArray = new Array('b', 'c', 'a')
console.log(newArray)


// Contar elementos de um Array
console.log(['a', 'b', 'c'].length)


// Transaformar um cadeia de caracteres - String - em elemntos de um Array
let word = "manipulação"
console.log(Array.from(word))


// manipulações do array
let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// // remover no fim
// techs.pop()

// // remover do começo
// techs.shift()

// // pega somente alguns elementos do array
// console.log(techs.slice(1, 3))

// // remover 1 ou mais itens em qualquer posição do array
// techs.splice(1,2)

// encontrar a posiçõ de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)