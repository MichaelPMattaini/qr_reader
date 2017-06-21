const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

var port = process.env.port || 8080;
app.listen(port, function() {
    console.log(port);
    console.log('App started.');
})