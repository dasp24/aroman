const express = require('express');
const boxers = require('./static/assets/boxers');

const app = express();

app.set('view engine', 'ejs');

// Specified Routes
app.get('/', (req, res) => res.render('home', { boxers, pageTitle: 'Aroman' }));
app.get('/contactUs', (req, res) => res.render('contactUs', { pageTitle: 'Contact Us' }));

// Static bucket
app.use('/static', express.static('static'));

// 404
app.use('*', (req, res) => res.render('404', { pageTitle: 'Page doesn\'t exist' }));

app.listen(process.env.PORT || 3000);