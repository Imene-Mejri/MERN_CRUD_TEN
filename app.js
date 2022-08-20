var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()
const routerUsers =require('./routes/users.routes')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB Connected'))
.catch(err =>console.log(err.message))

//Routes
app.use('/api', routerUsers )

module.exports = app;
