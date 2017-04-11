var socket = io();

var clientMessage = {
  from: 'Mike',
  text: 'Smoke weed everyday'
};
socket.on('connect',function() {
  console.log('Conneced to server');
  socket.emit('createMessage',clientMessage);
});
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New Email', email);
});

socket.on('newMessage', function(message) {
  console.log('New chat message', message);
});
