// connect to the socket
var socket = io();
var board = $("#puzzle-container");
var puzzleEmpty = true;

socket.on('connect', function () { 
    if(puzzleEmpty){
        socket.emit('loadPuzzle');
    }           
});

socket.on('receivePuzzle', function(data){
    var pieceSize = 56;
    for(var i = 0; i < data.board.PuzzlePieces.length; i++) {                        
            for(var j = 0; j< data.board.PuzzlePieces[i].length; j++) {
                var piece = document.createElement("div");
                var img = document.createElement("img");    
                img.src = "./images/" + data.board.PuzzlePieces[i][j].Color + ".png";          
                piece.className = "puzzle-piece";
                piece.appendChild(img);
                //piece.style.top = (i*pieceSize).toString() +"px";
                //piece.style.left = (j*pieceSize).toString() +"px";
                board.append(piece);
            }
        }
    puzzleEmpty = false;
});