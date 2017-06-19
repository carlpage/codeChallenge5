var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

// 27017 is default mongo port
mongoose.connect('localhost:27017');

var newList = new mongoose.Schema({
  name: String,
  message: String
});

var messageModel = mongoose.model('messages', newList);

router.get('/', function(req, res) {
  console.log('in send messageModel');
  messageModel.find().then(function(response) {
    res.send(response);
  });
});

router.post('/', function(req, res) {
  console.log('req.body: ' + req.body);
  var messageToAdd = {
    name: req.body.name,
    message: req.body.message,
  }
  var newMessage = messageModel(messageToAdd);
  newMessage.save();
});

module.exports = router;
