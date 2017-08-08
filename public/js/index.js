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

socket.emit('createMessage', {
  from:'Frank',
  text:'Hi'
}, function(data){
  console.log('Got it', data);
});
