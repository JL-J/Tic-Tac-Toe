$(document).ready(function() {

  var logic = new GameLogic();
  var board = new GameBoard(logic);
  var game = new Game(board);

$('.box').click(function() {
  try {
    $('#error').text("");
    board.addMove(this.id);
    $(this).html(game.turn);
    game.takeTurn();
    gameOutcome();
  } catch (error) {
    $('#error').text(error);
  }
})

$('button').on('click', function() {
  $('.box').text("");
  board.resetBoard();
  game.resetGame();
})

function gameOutcome() {
  switch(logic.outcome()) {
    case "Draw":
      $('#outcome').text("It's a draw");
    case "Continue":
      // Do nothing
  }
}

});
