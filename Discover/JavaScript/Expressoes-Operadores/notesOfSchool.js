/* ### Transformar scores escolares

crie um algoritmo que tranforme as scores  do sistema
númerico para sistema  de noras em caracteres tipo A B C

* de 90 para cima   - A
* entre 80 - 89     - B
* entre 70 - 79     - C 
* entre 60 - 69     - D
* menor que 60      - F
*/



/*function getScore(score) {
    let result
    switch (score) {
        case (score > 90):
            console.log('Your score is:  A')
            break;
    
        default:
            console.log('Deu errado')
            break;
    }
    return result
}*/

//console.log(getScore(60))


function getScore(score) {
    let result
    if (score >= 90 && score<=100) {
        result = 'Your score is: A'
    } else if(score >=80 && score <= 89 ){
        result = 'Your score is: B'
    }else if(score >=70 && score <= 79 ){
        result = 'Your score is: C'
    }else if(score >=60 && score <= 69 ){
        result = 'Your score is: D'
    }else if (score >=1 && score < 60){
        result = 'Your score is: F'
    }else {
        result = 'Score invalid'
    }

    return result
}

console.log(getScore(95))