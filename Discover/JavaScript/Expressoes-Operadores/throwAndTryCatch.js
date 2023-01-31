// throw - disparar ou lançar

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try... catch

try {
    sayMyName('Fred')
} catch(e) {
    console.log(e)
}
