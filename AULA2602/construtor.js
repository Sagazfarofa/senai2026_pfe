class Estudante {
    nome ;
    #ra ;
    #cpf ;

    constructor(nome,ra,cpf){
        this.#cpf = cpf;
        this.nome = nome;
        this.#ra = ra;
    }
}

const Noemi = new Estudante("Noemi", "123456", "123.456.789-00");
console.log(Noemi);

