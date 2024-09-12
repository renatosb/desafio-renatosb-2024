import { Animais, Rescintos } from "./entidades-zoo.js"

class ServicesZoo {

    #rescintoToString(rescinto) {
        let espacoLivre = 0
        return `Recinto ${rescinto.numero} (espaço livre: ${espacoLivre} total: ${rescinto.tamanho})`
    }

    existeAnimal(animal) {
        return Animais[animal]
    }

    filtraRescintos(animal, quantidade) {

        const rescintosFiltradosOrdenados = []

        //filtra por biomas e ordena por numero dos rescintos
        Animais[animal].BIOMAS.forEach(biomaAnimal => {
            Rescintos.forEach(rescinto => {
                rescinto.BIOMAS.forEach(biomaRescinto => {
                    if (biomaAnimal == biomaRescinto) {
                        rescintosFiltradosOrdenados.push(rescinto)
                    }
                });
            });
        });

        rescintosFiltradosOrdenados.sort((a, b) => a.NUMERO - b.NUMERO)
        
        //aplicar regras        
        rescintosFiltradosOrdenados.forEach(rescinto => {
            console.log(rescinto)
        })

        if (rescintosFiltradosOrdenados.length == 0)
            throw "Não há recinto viável"

        return rescintosFiltradosOrdenados
    }

    teste() {

    }
}

export { ServicesZoo }