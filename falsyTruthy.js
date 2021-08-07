/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    underfined
    NaN
*/

console.log( 0 ? 'verdadeiro' : 'falso' )


/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( {} ? 'verdadeiro' : 'falso' )
