const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
app.use(express.static('public'))

const productsController = require('./controllers/products.js');
app.use('/products', productsController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
