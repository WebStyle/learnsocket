var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  cors = require('express-cors');

// routers
var shifts = require('./routers/shifts.js'),
  staff = require('./routers/staff.js'),
  positions = require('./routers/positions.js');

// mongoose
mongoose.connect('mongodb://localhost:27017/myproject');

// cors
app.use(cors({
  allowedOrigins: ['http://localhost:3000']
}));

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
app.use('/staff', staff);
app.use('/positions', positions);


// app conf
app.listen(9090, function() {
  console.log('Server is run on port 9090');
});
