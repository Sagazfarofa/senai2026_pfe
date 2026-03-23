const prompt = require('prompt-sync')()

let hoje = new Date();
 let anoatual = hoje.getFullYear();

    let fimdoano = new Date(anoatual, 11, 31);
    let diferencaMs = fimdoano - hoje

    let diasFaltando = Math.cell(diferencaMs / (1000 * 60 * 60 * 24));
    
    console.log("faltam" + diasFaltando + "dias para o fim de ano");
