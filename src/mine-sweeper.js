const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const boardWidth = matrix[0].length;
  const boardHeight = matrix.length;
  let result = [];

  for (let i = 0; i < boardHeight; i++) {
    result[i] = [];

    for (let k = 0; k < boardWidth; k++) {
      let counter = 0;

      if (matrix[i - 1]) {
        if (matrix[i - 1][k - 1]) counter++;
        if (matrix[i - 1][k]) counter++;
        if (matrix[i - 1][k + 1]) counter++;
      }

      if (matrix[i][k - 1]) counter++;
      if (matrix[i][k + 1]) counter++;

      if (matrix[i + 1]) {
        if (matrix[i + 1][k - 1]) counter++;
        if (matrix[i + 1][k]) counter++;
        if (matrix[i + 1][k + 1]) counter++;
      }

      result[i].push(counter);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
