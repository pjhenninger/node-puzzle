import { PuzzlePiece } from './components/PuzzlePiece'; 
import { PieceColor } from './components/PuzzlePiece';

module.exports = function(app,io){
    
    var chat = io.on('connection', function (socket) {
        socket.on('loadPuzzle',function(){       
            //var piece : PuzzlePiece = new PuzzlePiece(PieceColor.Red);
            var x = getRandomElementOfEnum<PieceColor>(PieceColor);
		});
    });

    function getRandomElementOfEnum<E>(e: any): E {
    var keys = Object.keys(e),
        index = Math.floor(Math.random() * keys.length),
        k = keys[index];
    if (typeof e[k] === 'number')
        return <any>e[k];
    return <any>parseInt(k, 10);
}
};


// async / await 
// promises 

