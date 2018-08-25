/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var num = 0;
  while (x) {
    num *= 10;
    num += x % 10;
    x = ~~(x / 10);
  }
  if ((num < Math.pow(-2, 31)) || (num > Math.pow(2, 31) - 1)) return 0
  return num;
};

// 这个题目最大的坑就是限制结果的范围而已，没多大难度。