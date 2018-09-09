/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0,
      len = height.length,
      temp_max = 0;
      temp_min = 0;
  for(let i = 0; i < len; ++i) {
      for(let m = i + 1; m < len; ++m) {
          temp_min = Math.min(height[i], height[m])
          temp_max = temp_min * (m - i);
          temp_max > max && (max = temp_max);

      }
  }
  return max;
};

// 冒泡比较。