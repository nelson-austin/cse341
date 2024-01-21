const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! :)');
});

app.listen(process.env.port || port);
console.log('Web server is running on port ' + (process.env.port || port));