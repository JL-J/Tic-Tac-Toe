describe ("GameBoard", function() {

  var board = new GameBoard();

  it("Should start the game with an empty array", function() {
    expect(board.takenMoves).toEqual([])
  });

  it("Records a players turn", function() {
    board.addMove("row1_box1")
    expect(board.takenMoves).toEqual(["row1_box1"])
  });

  it("Multiple moves can be recorded", function() {
    board.addMove("row2_box1")
    board.addMove("row1_box2")
    expect(board.takenMoves).toEqual(["row1_box1", "row2_box1", "row1_box2"])
  });

  it("It will not allow a move already played to be added to the record", function() {
    expect(function() {board.addMove("row2_box1");}).toThrow("This box is already taken")
  });

  it("Resets the game to the starting values", function() {
    board.resetBoard()
    expect(board.takenMoves).toEqual([])
  });

})
