/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const totalColumns = matrix[0].length;
  let Summs = 0;
  // check:
  for (let columnIndex = 0; columnIndex < totalColumns; columnIndex += 1) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
      if (matrix[rowIndex][columnIndex] === 0) {
        // continue check;
        break;
      }
      Summs += matrix[rowIndex][columnIndex];
    }
  }

  return Summs;
}

module.exports = getMatrixElementsSum;
