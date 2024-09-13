import { ServicesZoo } from "./services-zoo.js"

class RecintosZoo {
   
    analisaRecintos(animal, quantidade) {

        const servicesZoo = new ServicesZoo()
        try {
            if(!servicesZoo.existeAnimal(animal))
                throw "Animal inválido"

            if(isNaN(quantidade) || ( isFinite(quantidade) && quantidade <= 0))
                throw "Quantidade inválida"

            
            return servicesZoo.filtraRescintos(animal, quantidade)
            
        } catch (error) {
            return {
                erro: error
            }
        }
    }
}

export { RecintosZoo as RecintosZoo };
