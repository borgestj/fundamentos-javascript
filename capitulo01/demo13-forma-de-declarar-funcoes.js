function minhaFuncao1(parametro) {
    return `aeeeee`
}

const minhaFuncao2 = function(parametro) {
    return `aeeee ${parametro}`
}

const minhaFuncao3 = (parametro) => {
    return `aeeeee ${parametro}`
}

const minhaFuncao4 = parametro => `aee ${parametro}`

const obj1 = {
    minhaFuncao: parametro1 => `aeee ${parametro1}`
}

const obj2 = {
    minhaFuncao (parametro1) {
        return `aee ${parametro1}`
    }
}