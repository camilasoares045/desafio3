class Character {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
}

let character = new Character("Gandalf", "desconhecido", "ladino");

let ataque;

switch (character.tipo) {
  case "mago":
    ataque = "magia";
    break;
  case "guerreiro":
    ataque = "golpe de espada";
    break;
  case "arqueiro":
    ataque = "fechada no joelho";
    break;
  case "ladino":
    ataque = "invisibilidade e sumiu com suas calças";
    break;
  default:
    ataque = "ataque indefinido";
}

console.log(`O ${character.tipo} ${character.nome} atacou usando ${ataque}`);