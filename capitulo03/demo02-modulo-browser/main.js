// depois que a tela carregar, ela chama nossa funcao
window.onload = () => {

    function obterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }

    const btn = document.getElementById('btnCalcular')
    btn.onclick = click

    function click() {
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        const resultado = Matematica[tipoOperacao](valor1, valor2)
        console.log('resultado', resultado, tipoOperacao)

        document.getElementById('resultado').innerText = `
        A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}
        `

    }
}