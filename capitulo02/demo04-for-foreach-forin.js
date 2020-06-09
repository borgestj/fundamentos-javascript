const textoPar = "par"
const textoImpar = "impar"
// imprimir se é par ou impar até o 10
// nao precisa criar variavel externa
for(let index =0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O numero ${index} é: ${decisao}`)
}

//
const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder:'Veloz'
    },
    {
        id: Math.random(),
        nome: "Mariazinha",
        superPoder: "Super força"
    }
]

for(let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index]
    console.log(`
    id: ${item.id}
    Nome: ${item.nome},
    `)
}

// nao precisa do contador
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log(`Nome`, item.nome)
}

// nao precisa criar o item
for(const item of minhaListaDeTarefas) {
    console.log('Nome item', item.nome)
}