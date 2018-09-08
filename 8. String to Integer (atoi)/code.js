/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MIN =  Math.pow(-2,31);
  const MAX = Math.pow(2,31) - 1;
  str = str.trim();
  const reg =  /^[-+]?(\d)*[\s]?/;
  if(!reg.test(str)) {
      return 0;
  }
  str = str.match(reg)[0]
  let num = parseInt(str) || 0;
  if (num<= MIN) return MIN;
  if (num >=MAX) return MAX;
  return num;
};

// 这题就是纯粹的考正则表达式。难度不大，注意一下限制最大最小就OK。