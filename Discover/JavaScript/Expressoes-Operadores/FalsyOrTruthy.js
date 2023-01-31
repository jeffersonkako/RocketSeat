/* 
    Falsy 
    quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(0 ? 'verdadeiro' : 'falso')

/* 
    truthy
    quando um valor é considerado truthy em contextos onde um booleano é obrigatório (condicionais e loops)

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

console.log({} ? 'verdadeiro' : 'Falso')