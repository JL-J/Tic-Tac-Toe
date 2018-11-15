$(document).ready(function() {

  var logic = new GameLogic();
  var game = new Game();
  var board = new GameBoard();

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
  board.newMove(move);
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
