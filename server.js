const express = require('express');
const Client = require('pg').Client
const app = express();

app.use(express.json());
app.use(express.static('public'))

const peopleController = require('./controllers/people.js');
app.use('/people', peopleController);

const client = new Client({
    user: '',
    host: 'localhost',
    database: 'contacts',
    password: '',
    port: 5432,
})
client.connect();
client.query('SELECT * FROM people;', (err, res) => {
    console.log(res.rows)
})

app.listen(3000, () => {
    console.log('listening');
})
