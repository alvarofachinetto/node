
class Table{
    constructor(dados){
        this.header = dados[0];
        dados.shift();
        this.elementos = dados; 
    }

    get RowCount(){
        return this.elementos.length;
    }

    get CollumnCount(){
        return this.header.length;
    }
}

module.exports = Table;