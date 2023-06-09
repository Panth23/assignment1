const express = require('express');
const app = express();
const port = 3000;

const mainRouter = require('./router');
const projectRouter = require('./router/projects');

app.set('views','./views');
app.set('view engine','ejs');

app.use('/', mainRouter);
app.use('/projects', projectRouter);

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});