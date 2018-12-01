const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// Path location strategy to give Angular control over the routing inside our app
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log("Console listening");
