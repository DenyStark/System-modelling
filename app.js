const { version } = process.env;

const express = require('express');

const app = express();

app.get('/', (_req, res) => res.json({ version }));

module.exports = app;
