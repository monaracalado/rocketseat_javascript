// function hoisting
// como se o js elevasse a função 
sayMyAge()

function sayMyAge() {
    console.log(24)
}


//arrow function
// outra forama de escrever uma função -> mais curta
const sayMyName = () => {
    console.log('Monara')
}

sayMyName()


// callback function
// chamar a função devolta
function sayMyHeight(height) {
    console.log('antes de executar a função callback')

    height()

    console.log('depois de executar a callback')
}

sayMyHeight(
    () => {
        console.log('estou em uma callback')
    }
)


/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' esta andando'
    }
}

const mayk = new Person('Mayk')
const joao = new Person('Joao')
console.log(mayk.walk())
console.log(joao.walk())