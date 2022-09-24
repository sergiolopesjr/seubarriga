const createError = require('http-errors');
const express = require('express');
const consign = require('consign');

const app = express();
consign({ cwd: './src/main', verbose: false })
    .include('./config/app.config.js')
    .into(app);

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
