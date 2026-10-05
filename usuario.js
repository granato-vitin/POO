const Genero = Object.freeze ({
    M:"M",
    F:"F",
    OUTRO:"Outro"
})
class Usuario{
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    constructor(id, nome, senha, dataNascimento, genero, isAdmi){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmi = false;
    }
    perfil(){
        return "Nome: " + this.nome + " - Data de nascimento: " + this.dataNascimento.toString();

    }
}
const
