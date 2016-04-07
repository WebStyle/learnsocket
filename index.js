var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// routers
var shifts = require('./routers/shifts');

// app conf
server.listen(9090);
console.log('Server is run on port 9090');

// mongoose
mongoose.connect('mongodb://farrukh:12345678@ds015929.mlab.com:15929/schedular');

//conf
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// routers
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.use('/shifts', shifts);

io.on('connection', function(socket) {
  socket.emit('news', {
    hello: "World"
  });

  socket.on('add', function(data) {
    console.log(data);
  });

  socket.on('private', function(from, msg) {
    console.log(from + " " + msg);
  });

});
