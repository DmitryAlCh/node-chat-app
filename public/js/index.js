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
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li)
});

socket.emit('createMessage', {
  from:'Frank',
  text:'Hi'
}, function(data){
  console.log('Got it', data);
});

jQuery('#message_form').on('submit',function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){

  });
});
