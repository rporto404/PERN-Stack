const express = require('express');
const router = express.Router();

const data = [
    {
        id:1,
        name:'Matt',
        age: 38
    },
    {
        id:2,
        name:'Sally',
        age: 54
    },
    {
        id:3,
        name:'Xanathar',
        age: 17330
    },
];

router.get('/', (req, res) => {
    res.json(data)
});

router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
});

router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data);
});

router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data);
});

module.exports = router;
