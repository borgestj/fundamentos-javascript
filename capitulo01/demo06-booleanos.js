const podeDirigir = true
if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('Não tem saldo!')
}

const boolComString = "Ae hackerzão!!"

// Força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

// Negação
console.log('negação', !boolComString)

// Negação + forçar a boll
console.log(
    !('negação + forçar a boll!!',boolComString)
)