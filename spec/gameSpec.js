describe ("Game" , function() {

  var game = new Game();

  it("Should start the game with player's one token", function() {
    expect(game.turn).toBe("X")
  });

  it("After the first turn, the player's token should be player's two", function() {
    game.takeTurn()
    expect(game.turn).toBe("O")
  });

  it("After the second turn, the player's token should be player's one", function() {
    game.takeTurn()
    expect(game.turn).toBe("X")
  });

})
