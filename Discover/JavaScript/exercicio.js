// 1. Declare uma variável de nome weight
    let weight = "";
// 2. Que tipo de dado é a variével acima?
    console.log(typeof weight);
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name
    * age
    * stars: float
    * isSubscribed: Boolean

*/

let person = {
    name: 'Kako',
    age: 20,
    stars: 9.5,
    isSubscribed: true
}

/* 4. a variével student abaixo é de que tipo de dado?
    4.1 atribua a ela as mesmas propriedades e valores do exercício 3
    4.2 mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: 'Kako',
    age: 20,
    stars: 5.5,
    isSubscribed: true,
    weight: 88.9
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
console.log(typeof student)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor.
//let students = []

// 6. Reatribua valor para a variável acima colocando dentro dela o objeto studebtt da questão 4
//let students = [student, Marco]

// 7. coloque no console o valor da posição zero do array acima

/* 8. crie um novo student e coloque na posição 1 do array dos students */

let Marco = {
    name: 'Marco',
    age: 30,
    stars: 7.5,
    isSubscribed: false,
    weight: 90
}
//let students = [student, Marco] or students[1] = Marco

// 9. undefined
