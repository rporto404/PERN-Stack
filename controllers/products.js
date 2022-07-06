const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO products (name, category, price) VALUES ('${req.body.name}', '${req.body.category}', ${req.body.price})`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM products WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE products SET name = '${req.body.name}', category = '${req.body.category}', price = ${req.body.price} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM products ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
