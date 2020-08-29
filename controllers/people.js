const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
});

router.delete('/:id', (req, res) => {
    data = data.filter(person => person.id != req.params.id, 1);
    res.json(data);
});

router.put('/:id', (req, res) => {
    req.body.id = req.params.id;

    data = data.map((person) => {
        if(person.id == req.params.id){
            return req.body
        } else {
            return person
        }
    })
    res.json(data);
});

module.exports = router;
