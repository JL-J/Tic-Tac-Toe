function Game(board = new GameBoard()) {
  PLAYER_ONE_TOKEN = "X"
  PLAYER_TWO_TOKEN = "O"
  this.turn = PLAYER_ONE_TOKEN
  this.board = board
};

Game.prototype.takeTurn = function() {
  if (this._isplayerOnesTurn()) {
    this.turn = PLAYER_TWO_TOKEN;
  } else {
    this.turn = PLAYER_ONE_TOKEN;
  }
}

Game.prototype._isplayerOnesTurn = function() {
  return (this.turn === PLAYER_ONE_TOKEN);
}

Game.prototype.resetGame = function() {
  this.turn = PLAYER_ONE_TOKEN
}
