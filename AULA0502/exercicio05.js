const prompt = require('prompt-sync')()

let nascimento = Number(prompt('Informe o dia do seu nascimento '));
     
    let dataatual = new Date().getFullYear();
        const idade = dataatual - nascimento; 
            console.log('Sua idade é ' + idade);
