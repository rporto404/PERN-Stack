const express = require('express');
const router = express.Router();

let data = [
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
