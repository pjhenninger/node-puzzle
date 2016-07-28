"use strict";
var PuzzlePiece_1 = require('./components/PuzzlePiece');
module.exports = function (app, io) {
    var chat = io.on('connection', function (socket) {
        socket.on('loadPuzzle', function () {
            //var piece : PuzzlePiece = new PuzzlePiece(PieceColor.Red);
            var x = getRandomElementOfEnum(PuzzlePiece_1.PieceColor);
        });
    });
    function getRandomElementOfEnum(e) {
        var keys = Object.keys(e), index = Math.floor(Math.random() * keys.length), k = keys[index];
        if (typeof e[k] === 'number')
            return e[k];
        return parseInt(k, 10);
    }
};
// async / await 
// promises 
//# sourceMappingURL=server.js.map