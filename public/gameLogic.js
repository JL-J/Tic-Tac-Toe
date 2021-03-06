function GameLogic() {
  this.STARTING_NUMBER = 0
  this.numberOfTurns = this.STARTING_NUMBER
}

GameLogic.prototype.outcome = function() {
  this._increaseTurns();
  if (this.isEndGame()) {
    return 'Draw';
  } else {
    return 'Continue';
  }
}

GameLogic.prototype.isEndGame = function() {
  return (this.numberOfTurns === 9);
}

GameLogic.prototype._increaseTurns = function() {
  this.numberOfTurns ++;
}

GameLogic.prototype.resetLogic = function() {
  this.numberOfTurns = this.STARTING_NUMBER
}
