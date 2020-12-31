const fs = require('fs');
const util = require('util');

class Reader{
    
    constructor(){
        this.reader = util.promisify(fs.readFile); //promissify pega a função com callback e transforma em uma função com promisse
    }

    async read(filePath){
        try{
            return await this.reader(filePath, {encoding: 'utf-8'});
        }catch(err){
            if(err)
                throw new Error('Erro ao acessar arquivo');
        }
        
    }
}

module.exports = Reader;