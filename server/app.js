const express = require('express');
const path = require('path');
const body = require('body-parser');
//const app = express();
const mysql = require('mysql');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(__dirname + '/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const app = express();

var httpsServer = https.createServer(credentials, app);

app.use(body());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const db = mysql.createConnection({
    host: '192.168.1.3',
    user: 'net',
    password: '1234',
    database: 'data-ff'
});
// show data
app.get('/data', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT r.*,c.Class_Name FROM regi r, class_std c WHERE r.Class_D = c.ID;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/EN', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT e.*, r.firstname_D, r.lastname_D ,r.Email_D FROM electronic e , regi r WHERE r.Class_D = 1;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/CE', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT c.* , r.firstname_D, r.lastname_D,r.Email_D FROM computerengineering c , regi r WHERE r.Class_D = 2;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/CS', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT c.* , r.firstname_D, r.lastname_D,r.Email_D FROM computerscience c , regi r WHERE r.Class_D = 3;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/EE', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT c.* , r.firstname_D, r.lastname_D,r.Email_D FROM electricalengineeri c , regi r WHERE r.Class_D = 4;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/SS', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT c.* , r.firstname_D, r.lastname_D,r.Email_D FROM science c , regi r WHERE r.Class_D = 5;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

app.get('/class_std', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM class_std;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});

//delete
app.put('/delete', function(req, res) {
    var sql = 'DELETE FROM regi WHERE id_D = ?';
    db.query(sql,[req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//edit
app.put('/data', function(req, res) {
    var sql = 'UPDATE regi SET firstname_D= ? , lastname_D = ? , Class_D = ? WHERE id_D = ?';
    db.query(sql,[req.body.firstname_D,req.body.lastname_D,req.body.Class_D,req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//insert
app.post('/data', function(req, res){
    console.log(req.body);
    let data = {
        id_D:req.body.idkey,
        firstname_D:req.body.firstname,
        lastname_D:req.body.lastname,
        Email_D:req.body.email,
        Class_D:req.body.Class,
    };
    let sql = 'INSERT INTO regi SET ?';
    db.query(sql, data, (err, result)=>{
        if(err){
            console.log(err);
            console.log("ID is Primarykey!!!!!");
            console.log("Enter the id again..");
        }else{
            console.log(result);
        }
    });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});




//module.exports = app;
module.exports = httpsServer;