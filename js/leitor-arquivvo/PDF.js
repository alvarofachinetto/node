const htmlpdf = require('html-pdf');
var options = {format: 'Letter'}

class PDF{
    static Write(file, html){
        htmlpdf.create(html, options).toFile(file, (err) => {});
    }
}

module.exports = PDF;