const path = require('path');
const fs = require('fs');
const express = require('express')
const routes = require('./routes/index')

let app = express();

app.use(express.json());

app.use(routes)

app.use(express.static(path.join(__dirname, '../client')));

app.listen(5000, () => {
    console.log('server running')
});