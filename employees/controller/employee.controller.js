const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("/employees/save", {
        viewTitle: "Insert Employee"
    });
});

router.post('/', (req, res) => {
    if(req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
})

function insertRecord(req, res){
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;

    employee.save((err, doc) => {
        if(!err)
            res.redirect('employyes/list');
        else
            if(err.name === 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employees/save", {
                    viewTitle: "Insert employee",
                    employee: req.body
                });
            }
            else
                console.log('Error during record insert: '+ err);
    });
}

function updateRecord(req, res){
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err) res.redirect('employees/list')
        else{
            if(err.name === 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employees/save", {
                    viewTitle: "Update employee",
                    employee: req.body
                });
            }
            else console.log('Error during record update: '+ err);
        }
    });
}

router.get('/list', (req, res) => {
    Employee.find((err, doc) => {
        if(!err)
            res.render("employee/list", {
                list: doc
            });
        else
            console.log('Error during list employee: '+ err);
    });
});

function handleValidationError(err, body){
    for (const field in err.errors) {
        switch(err.errors[field].path){
            case 'fullname': 
                body['fullnameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id ,(err, doc) => {
        if(!err)
            res.render("employee/save", {
                viewTitle: "Update Employee",
                list: doc
            });
        else
            console.log('Error during list employee: '+ err);
    });
});

router.delete('/delete/:id', (req,res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err)
            res.render("employee/list");
        else
            console.log('Error during delete employee: '+ err);        
    });
})
module.exports('router')