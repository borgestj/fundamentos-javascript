const heroi = {
    nome: 'Flash',
    idade: 22,
    sexo: 'Masculino'
}

//console.log('Nome', heroi.nome)
//console.log('Idade', heroi['idade'])
//console.log('Sexo', heroi.sexo)
//console.log('Não Existe', heroi.naoExiste)

//heroi.id = 0001
//console.log(heroi)

// Saber as chaves
console.log(Object.keys(heroi))

// Saber os valores
console.log(Object.values(heroi))

const pessoa = {
    tamanho: '1.75 metros'
}

const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome
console.log(novoObj)