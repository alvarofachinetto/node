const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        text: String
    },
    city: {
        type: String
    }

});

mongoose.model('Employee', employeeSchema);