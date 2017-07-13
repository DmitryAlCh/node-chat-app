var socket = io();

var clientMessage = {
  from: 'Mike',
  text: 'Smoke weed everyday'
};
socket.on('connect',function() {
  console.log('Conneced to server');
  

});
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('NewMessage', message);
});
