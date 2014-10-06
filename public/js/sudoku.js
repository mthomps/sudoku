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
      [5,3,null,null,7,null,null,null,null],
      [6,null,null,1,9,5,null,null,null],
      [null,9,8,null,null,null,null,6,null],
      [8,null,null,null,6,null,null,null,3],
      [4,null,null,8,null,3,null,null,1],
      [7,null,null,null,2,null,null,null,6],
      [null,6,null,null,null,null,2,8,null],
      [null,null,null,4,1,9,null,null,5],
      [null,null,null,null,8,null,null,7,9]
    ];
  }

  return game;
}());
