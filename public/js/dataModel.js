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

  DataModel.prototype.handleDataChange = function(row, column, valueString) {
    if (valueString > 0 && valueString < 10) {
      this.dataMatrix[row][column] = parseInt(valueString);
    } else if (valueString === '') {
      this.dataMatrix[row][column] = null;
    }
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
    var continuationIndex = 0;

    _.each(dataMatrix, function(row, i) {
      var start = 0;
      var stop = 3;
      if (i === 3 || i === 6) {
        continuationIndex = i;
      }

      _(3).times(function(n) {
        squareSets[n + continuationIndex] = squareSets[n + continuationIndex].concat(row.slice(start, stop));
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
