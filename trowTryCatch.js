// throw
function sayMyName(name = '') {
    if (name ==='') {
        throw 'Nome é obrigatorio'
    }

    console.log(name)
}

// try...catch
try {
    sayMyName('')
} catch(e) {
    console.log(e)
}

console.log('após ao try/cath\n')

try {
    sayMyName('Monara')
} catch(e) {
    console.log(e)
}

console.log('após ao try/cath')