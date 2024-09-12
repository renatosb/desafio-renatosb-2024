//Enums
export const Especies = Object.freeze({
    LEAO: "LEAO",
    LEOPARDO: "LEOPARDO",
    CROCODILO: "CROCODILO",
    MACACO: "MACACO",
    GAZELA: "GAZELA",
    HIPOPOTAMO: "HIPOPOTAMO"
})

const Biomas = Object.freeze({
    SAVANA: "savana",
    FLORESTA: "floresta",
    RIO: "rio"
})

export const Alimentacao = Object.freeze({
    CARNIVORO: "carnívoro",
    ONIVORO: "onívoro",
    HERBIVORO: "herbívoro"
})

export const Regras = Object.freeze({
    BIOMA_ADEQUADO: 1,
    CONFORTO_PRESERVADO: 2,
    DIVERSIDADE: 3,
    FRATERNIDADE: 4
})

export const Restricoes = Object.freeze({
    CARNIVORO_UNICO: 1,
    HIPOPOTAMO_TERRITORIAL: 2,
    MACACO_SOLITARIO: 3
})
//---- FIM Enums ----

//Colecao de Animais
export const Animais = Object.freeze({
    LEAO: {
        ESPECIE: Especies.LEAO,
        TAMANHO: 3,
        BIOMAS: [Biomas.SAVANA],
        ALIMENTACAO: Alimentacao.CARNIVORO,
    },
    LEOPARDO: {
        ESPECIE: Especies.LEOPARDO,
        TAMANHO: 2,
        BIOMAS: [Biomas.SAVANA],
        ALIMENTACAO: Alimentacao.CARNIVORO,
     },
    CROCODILO: {
        ESPECIE: Especies.CROCODILO,
        TAMANHO: 3,
        BIOMAS: [Biomas.RIO],
        ALIMENTACAO: Alimentacao.CARNIVORO,
    },
    MACACO: {
        ESPECIE: Especies.MACACO,
        TAMANHO: 1,
        BIOMAS: [Biomas.SAVANA, Biomas.FLORESTA],
        ALIMENTACAO: Alimentacao.ONIVORO,
    },
    GAZELA: {
        ESPECIE: Especies.LEAO,
        TAMANHO: 2,
        BIOMA: Biomas.SAVANA,
        ALIMENTACAO: Alimentacao.CARNIVORO,
    },
    HIPOPOTAMO: {
        ESPECIE: Especies.LEAO,
        TAMANHO: 4,
        BIOMA: [Biomas.SAVANA, Biomas.RIO],
        ALIMENTACAO: Alimentacao.HERBIVORO,
     }
})

//Lista de Rescintos
export const Rescintos = [
    {
        NUMERO: 1,
        BIOMAS: [Biomas.SAVANA],
        TAMANHO: 10,
        ANIMAIS: [Animais.MACACO, Animais.MACACO, Animais.MACACO]
    },
    {
        NUMERO: 2,
        BIOMAS: [Biomas.FLORESTA],
        TAMANHO: 5,
        ANIMAIS: []
    },
    {
        NUMERO: 3,
        BIOMAS: [Biomas.SAVANA, Biomas.RIO],
        TAMANHO: 7,
        ANIMAIS: [Animais.GAZELA]
    },
    {
        NUMERO: 4,
        BIOMAS: [Biomas.RIO],
        TAMANHO: 8,
        ANIMAIS: []
    },
    {
        NUMERO: 5,
        BIOMAS: [Biomas.SAVANA],
        TAMANHO: 9,
        ANIMAIS: [Animais.LEAO]
    }
]

