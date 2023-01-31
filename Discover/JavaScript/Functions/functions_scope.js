// function scope
let subject = 'create video'

function creatThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink(subject))