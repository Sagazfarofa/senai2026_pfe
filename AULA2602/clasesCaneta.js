class Caneta {
    cor = 'Azul';
    marca = 'Bic';
    ponta = 'fina';
    qtdtinta = 5;
    tampa = false;

 // Métodos tem parenteses
    escrever() {
    return 'Começou a escrever';
    }
    sublinhar(valor) {
     if (valor > this.qtdtinta) {
        return 'insuficiente tinta para sublinhar';
        }
        else if (this.qtdtinta) 
     this.qtdtinta -= valor; //subtrai a quantidade de tinta
     this.qtdtinta += valor; 
     return 'Quantidade de tinta restante: ' + this.qtdtinta;
    }
}


const canetafina = new Caneta();
canetafina.escrever();
console.log(canetafina.sublinhar(2)); 
