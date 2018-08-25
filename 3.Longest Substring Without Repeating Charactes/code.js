/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) {return 0;}
  let max = 1;
  for(let i = 0; i < s.length; ++i) {
      let temp_length = 1;
      if(s.length - i <= max) { return max }
      var set = new Set(s[i]);
      for(let j = 2; j <= s.length - i; ++j) {
           if(set.add(s[i + j - 1]).size === j){
              max = ++temp_length > max ? temp_length : max;
              continue;
          }
          break;
      }
  }
  return max;
};


// 利用集合Set的方式判断字符串是否重复。
