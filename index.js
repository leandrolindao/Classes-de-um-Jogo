class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque padrão";
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi("Rasputin", 70, "mago");
  mago.atacar();
  
  const guerreiro = new Heroi("Alexandre O grande", 30, "guerreiro");
  guerreiro.atacar();
  
  const monge = new Heroi("Dalailama", 25, "monge");
  monge.atacar();
  
  const ninja = new Heroi("shinobi", 20, "ninja");
  ninja.atacar();