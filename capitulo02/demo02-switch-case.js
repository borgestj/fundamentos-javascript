
const readLine = require('readline')
const terminal = readLine.createInterface({
    // modo de entrada será via terminal
    input: process.stdin,
    // todo texto de saida será via terminal
    output: process.stdout
})

const textoMenu = `
Olá, seja bem vindo a sistema de media.
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiros
Digite 0 para acessar sair
`
const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'Você está na Opção 1, pode ter mais opcoes se quiser!',
        fn: menuOpcao1
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

function menuInicial(msg) {
    const resposta = Number(msg.toString())
    switch (resposta) {
        case 0:
            console.log('Saindo...')
            process.exit()
            break
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break
        case 2:
            console.log('menu de Herois')
            break
        case 3:
            console.log('menu de Guerreiros')
            break
        default:
            console.log('Opção inválida')
            break
    }
}

function menuOpcao1(msg) {
    console.log('recebido no submenu!', msg)
    terminal.close()
}