"use strict";
var b = require('./components/PuzzleBoard');
module.exports = function (app, io) {
    var chat = io.on('connection', function (socket) {
        socket.on('loadPuzzle', function () {
            var board = new b.PuzzleBoard();
            var z = 1;
        });
    });
};
// async / await 
// promises 
//# sourceMappingURL=server.js.map