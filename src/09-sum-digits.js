/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  const arrNumb = arr.map(Number);
  let sum = 0;
  for (let i = 0; i < arrNumb.length; i++) {
    sum += arrNumb[i];
  }

  let result = 0;
  while (sum > 0) {
    result += sum % 10;
    sum = Math.floor(sum / 10);
  }
  return result;
}

module.exports = getSumOfDigits;
