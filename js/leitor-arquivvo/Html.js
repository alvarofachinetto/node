const ejs = require('ejs');

class Html{
    
    static async Parse(table){
        return await ejs.renderFile('./Pessoas.ejs', {header: table.header, rows: table.elementos});
    }
}

module.exports = Html;