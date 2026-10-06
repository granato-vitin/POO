console.log("Classe Carro")

class Carro {
    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {
        this.idCarro = idCarro;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = disponivel;
        this.anoFabricacao = anoFabricacao;
    }
}

const carro1 = new Carro(1, "Civic", "Preto", true, 2021);
const carro2 = new Carro(2, "Corolla", "Branco", false, 2022);
const carro3 = new Carro(3, "Onix", "Vermelho", true, 2020);

console.log("--- Objetos Criados ---");
console.log(carro1);
console.log(carro2);
console.log(carro3);

carro1.cor = "Cinza";
carro2.disponivel = true;

console.log("\n--- Objetos Atualizados ---");
console.log(carro1);
console.log(carro2);
