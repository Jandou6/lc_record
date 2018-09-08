/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const reg = eval(`/^${p}$/`)
  return reg.test(s)
};

// :) 这题偷个懒吧, 自己实现的话感觉也不会很难。自接用js的正则吧。