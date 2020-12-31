const numeros = new Array(1, 2, 3, 4, 5);

function nomes(a, b, ...args){

    const soma = args.reduce((prev, curr) => prev.length + curr.length, 0);
    console.log(soma);
}

function processa(...args){
    console.log(...args);
}

const nome = 'ALvaro Silva F'

processa(...nome);
processa(numeros);
// nomes('Silva', 'Hyroku', 'Maiara', 'Yruan');


