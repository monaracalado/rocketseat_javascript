// .: Estrutura de repetição :.

// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }

    console.log(i)

}

console.log('\n')

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }

    console.log(i)

}

// while - mais usual quando não se sabe o momento de parada

let i = 45375457855
while(i > 10) {
    console.log(i.toFixed(2))

    i /= 30;
}

// for...of - pega um a um caracter ou elemento 

let name = "Monara";
let names = ['Maria', 'Luna', 'Sara'];

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}


// for...in - ultilizada para pegar propriedades do objeto

let person = {
    name: 'Monara',
    age: 24,
    weight: 52.3
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}