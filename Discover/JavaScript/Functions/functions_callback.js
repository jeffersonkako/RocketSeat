// callback function

function sayMyName(name) {
    console.log('antes de executar a funao callback')

    name()

    console.log('depois de executar uma callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)