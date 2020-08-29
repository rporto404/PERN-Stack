const Client = require('pg').Client

const client = new Client({
    user: '',
    host: 'localhost',
    database: 'contacts',
    password: '',
    port: 5432,
})

module.exports = client;
