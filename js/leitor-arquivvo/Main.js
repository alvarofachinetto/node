const Html = require("./Html");
const PDF = require("./PDF");
const Processador = require("./Processador");
const Reader = require("./Reader");
const Table = require("./Table");
const Writer = require("./Writer");

// const json = new ProcessadorJson();

// const tamanho = json.leitorJson('./Pessoa.json');

// console.log(tamanho)
// var pessoa1 = {
//     nome: 'Alvaro Silva',
//     idade: 20,
//     sexo: 'MASCULINO'
// };

// var pessoa2 = {
//     nome: 'Amanda Gonçalves',
//     idade: 22,
//     sexo: 'FEMININO'
// };

// json.escritorJson('./Pessoa.json', pessoa1);
// json.escritorJson('./Pessoa.json', pessoa2);

var reader = new Reader();
var writer = new Writer();
    
async function main(){
    var pessoas = await reader.read('./Pessoas.csv');
    var dadosProcessados = Processador.Process(pessoas);
    var tabela = new Table(dadosProcessados); 
    var html = await Html.Parse(tabela);
    await writer.write(`${Date.now()}.html`, html);
    PDF.Write(`${Date.now()}.PDF`, html);
}

main();