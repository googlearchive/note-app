var express = require('express');
var app = express();

app.use(express.static('./demo'));

app.listen(8080);
