const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err) => {
    if(!err) console.log('Connection succeeded');
    else console.log('Error in connection: '+ err);
});