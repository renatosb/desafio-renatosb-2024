import { Alimentacao, Animais, Biomas, Rescintos } from "./entidades-zoo.js"

class ServicesZoo {

    existeAnimal(animal) {
        return Animais[animal]
    }

    filtraRescintos(animal, quantidade) {

        const rescintosFiltradosOrdenados = []
        const novoAnimal = Animais[animal]

        //filtra por biomas e ordena por numero dos rescintos
        novoAnimal.BIOMAS.forEach(biomaAnimal => {
            Rescintos.forEach(rescinto => {
                rescinto.BIOMAS.forEach(biomaRescinto => {
                    if (biomaAnimal === biomaRescinto) {
                        rescintosFiltradosOrdenados.push(rescinto)
                    }
                })
            })
        })

        rescintosFiltradosOrdenados.sort((a, b) => a.NUMERO - b.NUMERO)
        
        //aplicar regras  
        const rescintosProntos = []
        rescintosFiltradosOrdenados.forEach(rescinto => {
            const ocupacao = this.#podeOcupar(novoAnimal, quantidade, rescinto)
            if (ocupacao.podeOcupar) {
                rescintosProntos.push({
                    rescinto: rescinto,
                    espacoLivre: ocupacao.espacoLivre
                })
            }
        })

        if (rescintosProntos.length == 0)
            throw "Não há recinto viável"

        return {
            recintosViaveis: this.#rescintoToString(rescintosProntos)
        }
    }

    #podeOcupar(animal, quantidade, rescinto) {

        let tamanhoAnimais = animal.TAMANHO * quantidade

        //REGRAS
        let hasAnimais = rescinto.ANIMAIS.length > 0
        let hasAnimaisDiferentes = rescinto.ANIMAIS.filter(animal => animal === animal).length < rescinto.ANIMAIS.length
        let hasAnimaisIguais = false
        let hasAnimaisIguaisAoNovo = false
        
        if (!hasAnimaisDiferentes) {
            hasAnimaisIguais = true
            if(hasAnimaisIguais)
                hasAnimaisIguaisAoNovo = rescinto.ANIMAIS.indexOf(animal) != -1
        }

        let hasCarnivoros = rescinto.ANIMAIS.filter(animal => animal.ALIMENTACAO === Alimentacao.CARNIVORO).length > 0
        let hasHipopotamo = rescinto.ANIMAIS.filter(animal => animal === Animais.HIPOPOTAMO).length > 0
        let hasSavanaERio = (rescinto.BIOMAS.indexOf(Biomas.SAVANA) != -1) && (rescinto.BIOMAS.indexOf(Biomas.RIO) != -1)

        let isCarnivoro = animal.ALIMENTACAO === Alimentacao.CARNIVORO
        let isMacaco = animal === Animais.MACACO
        let isHipopotamo = animal === Animais.HIPOPOTAMO

        //checar se pode ser inserido
        if (!hasAnimais) {
            // regra macaco solitario
            if (isMacaco && quantidade < 2)
                return false
            
        } else {
            //regra diversidade de especies
            if (!hasAnimaisIguaisAoNovo)
                ++tamanhoAnimais

            //regra carnivoro unico
            if ((hasCarnivoros || isCarnivoro) && !hasAnimaisIguaisAoNovo)
                return false

            //regra hipopotamo territorial
            if ((hasHipopotamo || isHipopotamo) && !hasSavanaERio)
                return false
        }

        //regra conforto
        return {
            podeOcupar: tamanhoAnimais < rescinto.TAMANHO,
            espacoLivre: this.#espacoLivre(rescinto) - tamanhoAnimais
        }
    }

    #espacoLivre(rescinto) {
        let tamanhoAnimais = 0
        let hasAnimaisDiferentes = rescinto.ANIMAIS.filter(e => e === e).length < rescinto.ANIMAIS.length

        rescinto.ANIMAIS.forEach(animal => {
            tamanhoAnimais += animal.TAMANHO
        })

        if (hasAnimaisDiferentes)
            ++tamanhoAnimais

        return rescinto.TAMANHO - tamanhoAnimais
    }

    #rescintoToString(rescintosProntos) {
        const rescintosToString = []
        rescintosProntos.forEach(rescinto => {
            rescintosToString.push(`Recinto ${rescinto.rescinto.NUMERO} (espaço livre: ${rescinto.espacoLivre} total: ${rescinto.rescinto.TAMANHO})`)
        })
        return rescintosToString
    }
}

export { ServicesZoo }