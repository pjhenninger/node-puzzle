"use strict";
(function (PieceColor) {
    PieceColor[PieceColor["Red"] = 0] = "Red";
    PieceColor[PieceColor["Green"] = 1] = "Green";
    PieceColor[PieceColor["Blue"] = 2] = "Blue";
    PieceColor[PieceColor["Yellow"] = 3] = "Yellow";
    PieceColor[PieceColor["Purple"] = 4] = "Purple";
    PieceColor[PieceColor["White"] = 5] = "White";
    PieceColor[PieceColor["Black"] = 6] = "Black";
})(exports.PieceColor || (exports.PieceColor = {}));
var PieceColor = exports.PieceColor;
var PuzzlePiece = (function () {
    function PuzzlePiece(color) {
        this.Color = color;
    }
    return PuzzlePiece;
}());
exports.PuzzlePiece = PuzzlePiece;
//# sourceMappingURL=PuzzlePiece.js.map