const fs = require('fs');
const util = require('util');

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async write(file, data){
        try {
            this.writer(file, data);
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = Writer;