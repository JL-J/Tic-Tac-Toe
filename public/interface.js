$(document).ready(function() {

  var board = new GameBoard();
  var game = new Game(board);

$('.box').click(function() {
  board.addMove(this.id);
  $(this).html(game.turn);
  game.takeTurn();
})

$('button').on('click', function() {
  $('.box').text("");
  board.resetBoard();
  game.resetGame();
})

});
