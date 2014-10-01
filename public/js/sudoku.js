var SudokuGame = (function() {
  var game = {};

  game.start = function() {
    this.setupTemplates()
    this.setupBoard()
  }

  game.setupTemplates = function() {
    Templates = {}
    Templates.sudokuBoard = $('#board-template').html()
    Templates._row = $('#row-template').html()
    Templates._box = $('#cell-template').html()

    Handlebars.registerPartial('_row', Templates._row)
    Handlebars.registerPartial('_box', Templates._box)
  }

  game.setupBoard = function() {
    var template = Handlebars.compile(Templates.sudokuBoard);
    var result = template(this._getBoardData());
    $('#sudoku-board').append(result);
  }

  game._getBoardData = function() {
    return [
      [5,3,null,null,7,null,null,null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8,null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4,1,9, null,null,5],
      [null,null,null, null, 8, null, null, 7,9]
    ];
  }

  return game;
}());
