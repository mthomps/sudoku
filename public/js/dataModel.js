DataModel = (function() {
  function DataModel(data) {
    this.dataMatrix = data;
  }

  DataModel.prototype.isBoardCorrect = function() {
    var rowsCorrect = evalArrayOfSets(this.dataMatrix);
    var columnsCorrect = evalArrayOfSets(getColumns(this.dataMatrix));
    var squaresCorrect = evalArrayOfSets(getSquares(this.dataMatrix));
    return rowsCorrect && columnsCorrect && squaresCorrect;
  }

  function getColumns(dataMatrix) {
    var columns = [[],[],[],[],[],[],[],[],[]];
    _.each(dataMatrix, function(row) {
      _(9).times(function(i) {
        columns[i].push(row[i]);
      });
    });

    return columns;
  }

  function getSquares(dataMatrix) {
    var squareSets = [[],[],[],[],[],[],[],[],[]];
    
    _.each(dataMatrix, function(row, i) {
      var start = 0;
      var stop = 3;
      var addee = 0;
      // TODO: Clean & simplify 'addee'
      if (i >= 6) {
        addee = 6;
      } else if (i >= 3) {
        addee = 3;
      }

      _(3).times(function(n) {
        squareSets[n + addee] = squareSets[n + addee].concat(row.slice(start, stop));
        start = start + 3;
        stop = stop + 3;
      });
    });

    return squareSets;
  }

  function evalArrayOfSets(setArray) {
    return _.reduce(setArray, function(memo, set) { return memo && evalSet(set); }, true);
  }

  // Returns true if the given array is a set of the numbers 1-9, occurring once each
  function evalSet(intArray) {
    if (intArray.length !== 9) {
      return false;
    }
    var numberSet = [];
    var result = _.every(intArray, function(n) {
      var isValidInput = (n > 0 && n < 10);
      var isUnique = !(n in numberSet);
      numberSet[n] = true;

      return isValidInput && isUnique;
    });

    return result;
  }

  return DataModel;
}());
