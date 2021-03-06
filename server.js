var express = require('express')
var logger = require('morgan')
var app = express()
var template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 80, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 80))
})

//https://www.clock.co.uk/insight/a-simple-website-in-node-js-2016-edition