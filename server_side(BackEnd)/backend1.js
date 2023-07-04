// Import the required modules
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

// Create an instance of Express
const app = express();

app.use(cors(),express.json());
// Create a connection to the MySQL database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:'theTeddyProject'
});

app.get('/data',async(req,res) =>{
        var getTableData = `SELECT *  FROM teddy`;
        con.query(getTableData, function(err, result){
            // if(err) throw err;
            // alert("Data added successfully!")
            res.status(200).send(result);
        })
})
app.get('/search/:searchData',async(req,res) =>{
    var data=req.params.searchData
    var getTableData = `select * from teddy where Product_Name="${data}"`;
    con.query(getTableData, function(err, result){
        res.status(200).send(result);
    })
})
app.get("/sort/:sortData",async(req,res) =>{
    var sortOrders=req.params.sortData;
    var getTableData = `select * from teddy ORDER BY Product_Price ${(sortOrders === 'asc') ? "ASC" : "DESC"}`;
    con.query(getTableData, function(err, result){
        if(err) throw err;
        res.status(200).send(result);
    })
})
const port = 5050;
app.listen(5050, () => {
    console.log(`Server running on port ${port}`);
  }); 
app.on('listening', function() {
    console.log('Express server started on port %s at %s', app.address().port, app.address().address);
});