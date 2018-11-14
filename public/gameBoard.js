function GameBoard() {
  this.takenMoves = []
}

GameBoard.prototype.addMove = function(move) {
  if (this._isMoveTaken(move)) {
    throw "Error";
  } else {
    this.takenMoves.push(move);
  }
}

GameBoard.prototype._isMoveTaken = function(move) {
  return (this.takenMoves.includes(move))
}

GameBoard.prototype.resetBoard = function() {
  this.takenMoves = []
}
