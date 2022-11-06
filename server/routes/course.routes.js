const express = require('express');
const router = express.Router();

const db = require('../db/pool.js'); // db is a connection pool

// base path = /api/courses 
//------------------------------

//route: get all courses 

router.get('/', function (req, res) {
    console.log("GET " + req.baseUrl + req.path);

    db.query('SELECT Id,Name,Price,Description FROM courses WHERE Deleted=0', function(err, rows, fields) {
        
        if (err) {
            console.log('[X] Error fetching records');
            res.status(500).json({error: 'Error fetching records'});
            return
        };

        console.log(`[v] Fethced ${rows.length} rows`);
        res.json(rows);
    });
});

//route:DELETE: delete course 

router.delete('/:id', function (req, res) {
    console.log(req.method + ' ' + req.baseUrl + req.path);

    console.log(req.params.id);

    db.query(`UPDATE courses SET Deleted=0 WHERE id=${req.params.id}`, function(err, rows, fields) {
        
        if (err) {
            console.log(`[X] Error deleting record with id ${req.params.id}`);
            res.status(500).json({error: `Error deleting record with id ${req.params.id}`});
            return
        };

        if (rows.affectedRows === 0) {
            console.log(`[X] Cannot find id ${req.params.id}`);
            res.status(500).json({error: `Cannot find id ${req.params.id}`});
            return
        }

        console.log(`[v] Fethced ${rows.length} rows`);
        console.log(`seccesfuly deleted record (id ${req.params.id})`);
        res.json(rows);
    });
});

router.post('/', function (req, res) {
    // console.log(req.body);
    // res.end();

    const sqlQuery = `INSERT INTO courses (Name,Price,Description,Deleted)
    VALUES ("${req.body.Name}", ${req.body.Price}, "${req.body.Description}", 0)`;
 
    console.log(sqlQuery);

    db.query(sqlQuery, function(err,rows,fields) {

    });
    res.end();
});


module.exports = router;