$(document).ready(function() {

var game = new Game()

$('.box').click(function() {
  $(this).html(game.turn);
  game.takeTurn();
})

$('#restart').on('click', function() {
})

});
