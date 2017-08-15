//Loaded node modules
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage}= require('./utils/message.js');
const {isRealString} = require('./utils/validation.js');

// built-in modules
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
var chatMessage = {
  from: 'Andrew Df',
  text: 'some random chat message',
  createdAt: 11042017
};
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joins the chat'));

  socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)){
      callback('Name and room are required');
    }
    callback();
  })

  socket.on('createMessage', (clientMessage, callback) =>{
    // console.log('createMessage', clientMessage);
    io.emit('newMessage', generateMessage(clientMessage.from, clientMessage.text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude,coords.longitude));
  });


});

server.listen(port, () => {
  console.log(`Server is Up and running on ${port}`);
});

// console.log(__dirname + '/../public');
// console.log(publicPath);
