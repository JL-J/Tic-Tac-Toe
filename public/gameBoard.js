function GameBoard(logic = new GameLogic()) {
  this.takenMoves = []
  this.logic = logic
}

GameBoard.prototype.addMove = function(move) {
  if (this._isMoveTaken(move)) {
    throw "This box is already taken";
  } else {
    this.takenMoves.push(move);
    this.logic._increaseTurns();
  }
}

GameBoard.prototype._isMoveTaken = function(move) {
  return (this.takenMoves.includes(move))
}

GameBoard.prototype.resetBoard = function() {
  this.takenMoves = []
}
