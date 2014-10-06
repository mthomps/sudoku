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
    var boardView = template(getInitialBoardData());
    $('#sudoku-wrapper').html(boardView);
    bindEvents()
  }

  function setupTemplates() {
    Templates = {};
    Templates.sudokuBoard = $('#board-template').html();
    Templates.successMessage = $('#success-message-template').html();
    Templates.errorMessage = $('#error-message-template').html();
    Templates._row = $('#row-template').html();
    Templates._box = $('#cell-template').html();

    Handlebars.registerPartial('_row', Templates._row);
    Handlebars.registerPartial('_box', Templates._box);
  }

  function bindEvents() {
    $('#submit-button').click(function(event) {
      event.preventDefault();
      submitBoard();
    });
    $('#reset-button').click(function(event) {
      event.preventDefault();
      game.start()
    });
    $('#sudoku-wrapper input').on('input', function(event) {
      handleNumberInput(event);
    });
    $('#sudoku-wrapper input').on('focus', function(event) {
      clearMessage();
    });
  }

  function handleNumberInput(event) {
    var newValue = event.target.value.replace(/[^\d]/,'');
    event.target.value = newValue;

    var column = $(event.target).data().column;
    // TODO: avoid jquery slowness, put row index on the input tag
    var row = $(event.target).closest('tr').data().row;
    game.dataModel.handleDataChange(row, column, newValue);
  }

  function submitBoard() {
    if (game.dataModel.isBoardCorrect()) {
      submitSuccess();
    } else {
      submitFail();
    }
  }

  function submitSuccess() {
    if ($('.message.success').length === 0) {
      var template = Handlebars.compile(Templates.successMessage);
      var successView = template()
      $('#message-view').html(successView).hide().slideDown()
      $('#sudoku-wrapper input').disable()
    }
  }

  function submitFail() {
    if ($('.message.error').length === 0) {
      var template = Handlebars.compile(Templates.errorMessage);
      var errorView = template()
      $('#message-view').html(errorView).hide().slideDown()
    }
  }

  function clearMessage() {
    $('#message-view').html('')
  }

  function getInitialBoardData() {
    return [
      [null,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2, null],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,null]
    ];
  }

  return game;
}());
