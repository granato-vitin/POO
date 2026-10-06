const Genero = Object.freeze( {
  M: "M",
  F: "F",
  OUTRO: "Outro"
})
class Usuario {
  id;
  nome;
  senha;
  dataNascimento;
  genero;
  isAdmin;

constructor(id, nome, senha, dataNascimento, genero){
  this.id = id;
  this.nome = nome;
  this.senha= senha;
  this.dataNascimento = new Date(dataNascimento);
  this.genero = genero;
  this.isAdmin = false;
}
  perfil(){
   return "Nome: " + this.nome + " - Nome de Nascimento: " + this.dataNascimento.toString();
     }
}

const user1 = new Usuario(1,"Jeol do Santos","253","1989-05-20T00:00:00",Genero.M);
const user2 = new Usuario(2,"Antony Emanuel","123","2010-04-14T00:00:00"Genero.M);
console.log(user1)
user1.nome = "Jeol do Santos"
console.log(user1.perfil())
console.log(user2.perfil())
