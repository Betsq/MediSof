const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('/home/site/wwwroot'));

app.get('/*', function(req,res) {
res.sendFile(path.join('/home/site/wwwroot/index.html'));
});

app.listen(process.env.PORT || 8080);