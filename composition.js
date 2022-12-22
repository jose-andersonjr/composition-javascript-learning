function composition(...funcoes) {
    // Currying (lazy evaluation)
    return function(valor){
        return funcoes.reduce((acumulador, funcao) => {
            return funcao(acumulador)
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}

const exagerado = composition(
    gritar, 
    enfatizar, 
    tornarLento
)

const quaseExagerado = composition(
    gritar, 
    enfatizar, 
)

console.log(exagerado('Cuidado com o buraco'))
console.log(quaseExagerado('Para'))
console.log(composition(
    tornarLento,
    gritar,
)(('aaaaa')))