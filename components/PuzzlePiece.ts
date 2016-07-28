export enum PieceColor{
    Red,
    Green,
    Blue,
    Yellow,
    Purple,
    White,
    Black    
}

export class PuzzlePiece{
    public Color : PieceColor;

    constructor(color:PieceColor){
        this.Color = color;
    }
}