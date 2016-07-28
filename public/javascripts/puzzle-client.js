// connect to the socket
var socket = io();

socket.on('connect', function () {        
    socket.emit('loadPuzzle');
});

socket.on('receivePuzzle', function(data){
    
});