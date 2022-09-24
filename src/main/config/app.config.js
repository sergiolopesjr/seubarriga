const bodyParser = require('body-parser');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

module.exports = app => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    app.use(bodyParser.json());
};
