describe("DataModel", function() {
  var dataModel;
  // TODO: Use factory for this data generation:
  var initialBoardData = [
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

  var orderedRowsData = [
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9]
    ];

  var orderedColumnsData = [
    [1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3],
    [4,4,4,4,4,4,4,4,4],
    [5,5,5,5,5,5,5,5,5],
    [6,6,6,6,6,6,6,6,6],
    [7,7,7,7,7,7,7,7,7],
    [8,8,8,8,8,8,8,8,8],
    [9,9,9,9,9,9,9,9,9]
  ];

  var orderedSquaresData = [
    [1,2,3,1,2,3,1,2,3],
    [4,5,6,4,5,6,4,5,6],
    [7,8,9,7,8,9,7,8,9],
    [1,2,3,1,2,3,1,2,3],
    [4,5,6,4,5,6,4,5,6],
    [7,8,9,7,8,9,7,8,9],
    [1,2,3,1,2,3,1,2,3],
    [4,5,6,4,5,6,4,5,6],
    [7,8,9,7,8,9,7,8,9]
  ];

  var correctBoardData = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
  ];

  describe('#isBoardCorrect', function() {
    it('should return true if every row, column, and 3x3 square has a unique set of ints 1-9', function() {
      dataModel = new DataModel(correctBoardData);
      expect(dataModel.isBoardCorrect()).toBe(true)
    });

    it('should return false otherwise', function() {
      dataModel = new DataModel(orderedRowsData);
      expect(dataModel.isBoardCorrect()).toEqual(false);
    });
  });
});
