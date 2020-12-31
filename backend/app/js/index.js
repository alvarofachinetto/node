// var pessoas = [
//     new Pessoa('A', 20),
//     new Pessoa('B', 19),
//     new Pessoa('C', 16),
//     new Pessoa('D', 23),
//     new Pessoa('E', 20),
//     new Pessoa('F', 18)
// ];
// const maiorIdade = pessoas
//             .filter(pessoa => pessoa.idade >= 20)
//             .reduce((a, b) => b.idade + 20, 0);
// console.log(maiorIdade);
// const pessoa = new Pessoa('Rita', 28);
// const conta = {
//     ...pessoa,
//     "saldo": 2500.00,
//     "sacar": (valor: number) => conta.saldo -= valor,
// }
// conta.sacar(300);
// console.log(conta);
// const observable = new NewsAgency();
// const observer = new NewsChannel('Ola');
// const observer2 = new NewsChannel('Chila');
// const observer3 = new NewsChannel('kkkk');
// observable.addObserver(observer);
// observable.addObserver(observer2);
// observable.addObserver(observer3);
// observable.setNews('news');
// observer.update(observable);
// observable.removeObserver(observer2);
// console.log(observable);
// console.log(observer)

const { Cassino } = require("./cassino");

// var numeros = [1,2,3, undefined, 4, 5, 6];

// var promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(numeros);
//         if(numeros.find(numero => numero === undefined))
//             reject(numeros);
//     }, Math.random() * 2000);
// });

// promesa
//     .then((v) => {
//         console.log(v);
//     }, () => console.log('Deru erro'));

