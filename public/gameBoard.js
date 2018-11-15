function GameBoard(logic = new GameLogic()) {
  this.xMoves = []
  this.oMoves = []
  this.logic = logic
}

GameBoard.prototype.newMove = function(move) {
  if (this._isMoveTaken(move)) {
    throw "This box is already taken";
  } else {
    this.addMove(move);
    this.logic._increaseTurns();
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
