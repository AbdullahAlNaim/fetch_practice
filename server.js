const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cars')
    .then(
);

app.get('/', (req, res) => {
    res.send('hello mongoose');
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})