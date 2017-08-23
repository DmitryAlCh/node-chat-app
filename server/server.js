//Loaded node modules
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage}= require('./utils/message.js');
const {isRealString} = require('./utils/validation.js');
const {Users} = require('./utils/users.js');

// built-in modules
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));
var chatMessage = {
  from: 'Andrew Df',
  text: 'some random chat message',
  createdAt: 11042017
};
io.on('connection', (socket) => {
  // console.log('New user connected');


  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)){
      return callback('Name and room are required');
    }

    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);
    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    // io.emit -> io.to(roomName).emit
    // socket.broadcast -> socket.broadcast.to(roomName).emit
    // socket.emit
    socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin', `${params.name} user joins the chat`));
    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));
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
  socket.on('disconnect', () => {
    console.log('User disconnected from server');
    var user = users.removeUser(socket.id);
    if (user){
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Amidn', `${users.name} has left`));
    }
  });

});

server.listen(port, () => {
  console.log(`Server is Up and running on ${port}`);
});

// console.log(__dirname + '/../public');
// console.log(publicPath);
