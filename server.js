const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(process.env.PORT || 8080);
