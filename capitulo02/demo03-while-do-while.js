// enquanto ela nao mudar, nada para!
let termoDeParada = true

let contador = 0
while (termoDeParada) {
    termoDeParada = contador < 10
 
    if (contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1
    
}

/// 
do {
    console.log('Vai executar uma vez! pois termoDeParada é', termoDeParada)
} while (termoDeParada);

while (termoDeParada) {
    console.log('Nao vai executar!')
}
