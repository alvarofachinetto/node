
class Processador{
    static Process(dados){
        var a = dados.split("\n");
        var rows = [];

        a.forEach(row => {
            var elemento = row.split(',');
            rows.push(elemento);
        });

        return rows;
    }
}

module.exports = Processador;