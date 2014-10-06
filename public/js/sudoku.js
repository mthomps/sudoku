SudokuGame = (function() {
  var game = {};

  game.start = function() {
    setupDataModel();
    setupBoardView();
  }

  function setupDataModel() {
    game.dataModel = new DataModel(getInitialBoardData());
  }

  function setupBoardView() {
    setupTemplates();
    var template = Handlebars.compile(Templates.sudokuBoard);
    var result = template(getInitialBoardData());
    $('#sudoku-board').append(result);

    $('#submit-button').click( function(ev) {
      ev.preventDefault()
      submitBoard();
    })
  }

  function setupTemplates() {
    Templates = {};
    Templates.sudokuBoard = $('#board-template').html();
    Templates._row = $('#row-template').html();
    Templates._box = $('#cell-template').html();

    Handlebars.registerPartial('_row', Templates._row);
    Handlebars.registerPartial('_box', Templates._box);
  }

  function submitBoard() {
    if (game.dataModel.isBoardCorrect()) {
      submitSuccess();
    } else {
      submitFail();
    }
  }

  function submitSuccess() {
    console.log('SUCCESS');
  }

  function submitFail() {
    console.log('FAIL');
  }

  function getInitialBoardData() {
    return [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2, null],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]
    ];
  }

  return game;
}());
