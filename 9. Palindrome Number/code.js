/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let p_num = 0;
  let original_x = x;
  let i = (x + '').length - 1;
  while (x >= 1) {
    p_num += x % 10 * Math.pow(10, i--);
    x = ~~(x / 10);
  }
  return original_x == p_num;
};

// Easy 就不比多说了。