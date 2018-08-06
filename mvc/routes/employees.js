var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET All Employees */
router.get('/employees', function(req, res, next) {
    res.locals.connection.query('SELECT * from employees_test', function (error, results, fields) {
        if(error) {
            throw error;
        }
        res.send(JSON.stringify(results));
        console.log("All Employees:" + JSON.stringify(results));
    });
});

/* GET Employee Details by id */
router.get('/employees/:id', function (req,res,next) {
    console.log("ID: " + req.params.id);
    //res.header("Access-Control-Allow-Origin", "*");
    res.locals.connection.query('SELECT * from employees_test WHERE id=?',[req.params.id], function (error,results,fields) {
        if (error){
            throw error;
        }
        res.send(JSON.stringify(results))
    });
});

/*Create Employee*/
router.post('/employees', function(req, res, next) {
    var name = req.body.name;
    var designation = req.body.designation;
    var dob = req.body.dob;
    var salary = req.body.salary;
    console.log("Name: " + name);

    res.locals.connection.query('insert into `employees_test` (name, designation, dob, salary) values (\''+name.toString()+'\',\''+designation.toString()+'\',\''+dob.toString()+'\',\''+salary.toString()+'\')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

/*Update Employee*/
router.put('/employees/:id', function (req, res, next) {
    var name = req.body.name;
    var designation = req.body.designation;
    var dob = req.body.dob;
    var salary = req.body.salary;
    var id = req.body.id;

    res.locals.connection.query('update `employee_test` set `name`=?, `designation`=?, `dob`=?, `salary`=? where `id`=?',[name,designation,dob,salary], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

/*Delete Employee*/
router.delete('/employees', function (req, res, next) {
    res.locals.connection.query('delete from `employee_test` where `id`=?',[req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.send("Record has been Deleted!");
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Employee List Page');
});

module.exports = router;