const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();
const port = 3000;

const mainRouter = require('./router');
const projectRouter = require('./router/projects');

app.set('views','./views/pages');
app.set('view engine','ejs');
app.use( express.static( "public" ) );

app.use('/', mainRouter);
app.use('/', projectRouter);

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});