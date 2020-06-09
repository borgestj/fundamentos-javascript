const readfile = require('readline')
const terminal = readfile.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
// no async await
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, (msg) => {
            if(!msg) return reject(new Error('O campo não pode ser vazio!'))
            return resolve(msg)
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual é seu nome?')
        const telefone = await questionAsync('Qual é seu telefone?')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    } catch (error) {
        // primeiro!
        console.log('Deu ruim****', error.stack)
    } finally {
        terminal.close()
    }
}

main()
