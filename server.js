const express = require('express');
const app = express();

app.use(express.json());

const peopleController = require('./controllers/people.js');
app.use('/people', peopleController);

app.listen(3000, () => {
    console.log('listening');
})
