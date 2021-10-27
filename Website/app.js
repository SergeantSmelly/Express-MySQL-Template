// .env file support
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();

// const mysql = require('mysql');
// use mysql2 to fix authentication errors with mysql
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/db');

// use app routers
app.use('/', dbRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// port 3000 localhost
app.listen(3000);

module.exports = app;
