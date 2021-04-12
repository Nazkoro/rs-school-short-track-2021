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

function minesweeper(arr) {
  const array = arr;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === true) {
        array[i][j] = 9;
      } else array[i][j] = 0;
    }
  }

  function plusOne(h, w) {
    if (h >= 0 && h <= array.length - 1 && w >= 0 && w <= array.length - 1) {
      if (array[h][w] !== 9) {
        array[h][w]++;
      }
    }
  }

  for (let h = 0; h < array.length; h++) {
    for (let w = 0; w < array[0].length; w++) {
      if (array[h][w] === 9) {
        plusOne(h, w - 1);
        plusOne(h, w + 1);
        plusOne(h - 1, w);
        plusOne(h + 1, w);
        plusOne(h - 1, w - 1);
        plusOne(h + 1, w + 1);
        plusOne(h - 1, w + 1);
        plusOne(h + 1, w - 1);
      }
    }
  }

  for (let h = 0; h < array.length; h++) {
    for (let w = 0; w < array[0].length; w++) {
      if (array[h][w] === 9) {
        array[h][w] = 1;
      }
    }
  }

  return array;
}

module.exports = minesweeper;
