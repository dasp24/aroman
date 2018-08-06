const express = require('express');
const boxers = require('./static/assets/boxers');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home', { boxers }));

app.use(express.static('static'));

app.listen(3000);