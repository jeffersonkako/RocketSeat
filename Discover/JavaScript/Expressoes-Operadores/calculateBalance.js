/* ### Sistema de gastos familiares


Crie um objeto que possuirá 2 propriedades, ambos do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma função que irá calcular o total de receitas e des
pesas e irá mostrar uma menasagem se a família está com saldo positivo
ou negativo, seguido do valor do saldo.

*/

/*let family = {
    receitas: [500, 300, 900],
    despesas: [1000, 200, 100],
}

function calculoGastos(saldo) {
    saldo = family.receitas - family.despesas
    if (saldo > 0) {
        console.log('O saldo da família está positivo')
    }else {
        console.log('O saldo da família está negativo')
    }
    return `O saldo da família é de: ${saldo} R$`
}*/

//console.log(calculoGastos())

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450, 2000, 5000]
}

function sum(array) {
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses

    if (total>0) {
        console.log(`O saldo da Família está Positivo: R$ ${total.toFixed(2).replace('.', ',')}`)
    }else{
        console.log(`O saldo da Família está Negativo: R$ ${total.toFixed(2).replace('.', ',')} `)
    }
    return total
}

calculateBalance() 