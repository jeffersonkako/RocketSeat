// Operadores Condicional (ternário)

// Dependendo da condição, nós recerberemos vaores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplos
// Café da manã top

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

let age = 18

const maiorIdade = age >= 18 ? 'Maior de idade' : 'Menor de idade'

console.log(maiorIdade)