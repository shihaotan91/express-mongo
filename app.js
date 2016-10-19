var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var app = express()
var port = 4000

var music_routes = require('./routes/music')

app.use('/music', music_routes)

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect('mongodb://localhost/blog')
mongoose.Promise = global.Promise

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
