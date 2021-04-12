/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== -1 && array[j] !== -1) {
        if (array[i] < array[j]) {
          const temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
  }

  return array;
}

module.exports = sortByHeight;
