function GameBoard() {
  this.xMoves = []
  this.oMoves = []
}

GameBoard.prototype.newMove = function(move) {
  if (this._isMoveTaken(move)) {
    throw "This box is already taken";
  } else {
    this.addMove(move);
  }
}

GameBoard.prototype._isMoveTaken = function(move) {
  return (this.oMoves.includes(move) || this.xMoves.includes(move));
}

GameBoard.prototype.addMove = function(move) {
  if (this.xMoves.length === this.oMoves.length) {
    this.xMoves.push(move);
  } else {
    this.oMoves.push(move);
  }
}

GameBoard.prototype.resetBoard = function() {
  this.xMoves = []
  this.oMoves = []
}
