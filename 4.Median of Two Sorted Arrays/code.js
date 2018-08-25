/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  nums1 = nums1.concat(nums2)
  nums1.sort((a,b) => a - b);
  if (nums1.length & 1) {
      return nums1[nums1.length / 2 << 0]
  }
  var down = (nums1.length -1) / 2 << 0;
  
  return (nums1[down] + nums1[down + 1]) / 2; 
  }
  

  // 为了达到排序时间浮复杂度要求(logn)所以使用js的sort原生排序。而且判断是否能被2整除的时候使用位运算的话，运算时间大幅度减少。