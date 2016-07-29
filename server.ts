import * as p from './components/PuzzlePiece';
import * as b from './components/PuzzleBoard';  


module.exports = function(app,io){
    
    var chat = io.on('connection', function (socket) {
        socket.on('loadPuzzle',function(){       
            var board : b.PuzzleBoard = new b.PuzzleBoard();
            var z = 1;                   
		});
    });    
};


// async / await 
// promises 
