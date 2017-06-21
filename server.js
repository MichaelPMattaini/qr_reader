const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(port);
    console.log('App started.');
})