/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrStr = n.toString().split('');
  const arrNumber = arrStr.map(Number);
  const min = Math.min(...arrNumber);
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === min) {
      arrNumber.splice(i, 1);
    }
  }
  return Number(arrNumber.join(''));
}

module.exports = deleteDigit;
