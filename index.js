const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/config');
require('./startup/db');

app.listen(port, () => {
    console.log(`Running on: http://localhost:${port}`);
});