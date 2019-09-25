const { version } = process.env;

const express = require('express');

const laba1 = require('@routes/laba-1');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_req, res) => res.json({ version }));

app.use('/laba1', laba1);

module.exports = app;
