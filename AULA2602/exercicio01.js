class Jogador {//clas mae   
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar() {
        return ' 3 vezes na semana';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}

//classe jogador de futebol

class JogadorFutebolAmericano extends Jogador { 
    #posicao;
    #totalTouchdowns
    constructor(posicao, totalTouchdowns, nome, numero){
        super(nome, numero);
        this.#posicao = posicao;
        this.#totalTouchdowns = totalTouchdowns;
    }
    correr() {
        return 'correu 20 jardas';
    }
    fazerTouchdown(qtdTouchdowns) {
        return this.#totalTouchdowns += qtdTouchdowns;
  }
  jardasconquistadas() {
    return 'conquistou 50 jardas';
  }
  bloquear() {
    return 'bloqueou o adversário';
  }
    mostrar(){
    return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' posição ' + this.#posicao + ' têm ' + this.#totalTouchdowns
        + ' touchdowns' + ' e ' + this.jardasconquistadas() + ' e ' + this.bloquear(); 
    }
}
const jogador = new JogadorFutebolAmericano('quarterback', 5, 'Tom Brady', 12); 
jogador.fazerTouchdown(3);
console.log(jogador.mostrar());


class JogadorBasquete extends Jogador { 
    #nome
    #alturaSalto
    #numero
    #totaldecestas
    constructor(nome, alturaSalto, numero, totaldecestas){
        super(nome, numero);
        this.#nome = nome;
        this.#alturaSalto = alturaSalto;
        this.#numero = numero;
        this.#totaldecestas = totaldecestas;
    }
    saltar() {
        return 'saltou 1 metro';
    }
    fazerCesta(qtdCestas) {
        return this.#totaldecestas += qtdCestas;
  }
  fazerenterrada() {
    return 'fez uma enterrada incrível';
  }
    mostrar(){
    return 'O jogador ' + super.getNome() + ' do time de basquete, número ' + super.getNumero() + ' altura do salto ' + this.#alturaSalto + ' têm ' + this.#totaldecestas
        + ' cestas' + ' e ' + this.saltar() + ' e ' + this.fazerenterrada();
    }
}
const jogador2 = new JogadorBasquete('Michael Jordan', '1,5 metros', 23, 1000);
jogador2.fazerCesta(2);
console.log(jogador2.mostrar());

