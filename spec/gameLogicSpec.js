describe ("GameLogic", function() {

  var logic = new GameLogic();

  it("Should declare a draw if there are no more turns to take", function() {
    for(var i = 1; i < 10; i += 1) {
      logic._increaseTurns();
    };
    expect(logic.outcome()).toBe('Draw')
  })

})
