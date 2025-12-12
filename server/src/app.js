// app.js — Node.js Coffee API
let express = require('express')
let bodyParser = require('body-parser')
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
 
require('./routes')(app)

app.get('/status', (req, res) => {
    res.send('Hello MyCoffee!')
});

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
});

// START SERVER
let port = 8081
app.listen(port, function () {
  console.log('server running on ' + port)
})