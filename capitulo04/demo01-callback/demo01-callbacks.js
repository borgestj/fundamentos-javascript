const fs = require('fs')
// fs.readFile('./arq1.txt', (error, resposta)  => {
//     if(error) {
//         console.log('error!!', error)
//         return;
//     }
//     console.log('resposta', resposta)
//     console.log('resposta', resposta.toString())
// })

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
    if (errorArq1) {
        console.log('error1!!', errorArq1)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if (errorArq2) {
            console.log('error2!!', errorArq2)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if (errorArq3) {
                console.log('error3!!', errorArq3)
                return;
            }
            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`

            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if (errorWrite) {
                    console.log('error!!', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!')

            })
        })
    })
})

