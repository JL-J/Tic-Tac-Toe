$(document).ready(function() {

  var logic = new GameLogic();
  var board = new GameBoard(logic);
  var game = new Game(board);

$('.box').click(function() {
  try {
    clearMessages();
    registerNewMove(this.id, this);
    gameOutcome();
  } catch (error) {
    $('#error').text(error);
  }
})

$('button').on('click', function() {
  restart();
})

function registerNewMove(move, area) {
  board.addMove(move);
  $(area).html(game.turn);
  game.takeTurn();
}

function clearMessages() {
  $('#error').text("");
  $('#outcome').text("");
}

function gameOutcome() {
  switch(logic.outcome()) {
    case "Draw":
      $('#outcome').text("It's a draw");
    case "Continue":
      // Do nothing
  }
}

function restart() {
  $('.box').text("");
  clearMessages();
  board.resetBoard();
  game.resetGame();
  logic.resetLogic();
}

});
