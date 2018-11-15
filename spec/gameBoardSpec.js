describe ("GameBoard", function() {

  var board = new GameBoard();

  it("Should start the game with an empty array", function() {
    expect(board.xMoves).toEqual([])
    expect(board.oMoves).toEqual([])
  });

  it("Records a player x turn", function() {
    board.newMove("row1_box1")
    expect(board.xMoves).toEqual(["row1_box1"])
  });

  it("Does not record x's move in o's record", function() {
    expect(board.oMoves).toEqual([])
  })

  it("Multiple moves can be recorded", function() {
    board.newMove("row2_box1")
    board.newMove("row1_box2")
    expect(board.xMoves).toEqual(["row1_box1", "row1_box2"])
  });

  it("It will not allow a move already played to be added to the record", function() {
    expect(function() {board.newMove("row2_box1");}).toThrow("This box is already taken")
  });

  it("Resets the game to the starting values", function() {
    board.resetBoard()
    expect(board.xMoves).toEqual([])
    expect(board.oMoves).toEqual([])
  });

})
