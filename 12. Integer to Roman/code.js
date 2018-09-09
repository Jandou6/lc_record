/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let i = (num + '').length;
  let str = ''
  let temp_num = 0;
  const nume_roman = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M', undefined],];
  let roman_dist = {};
  const translateToRoman = function () {
    for (let m = 0; m < i; m++) {
      for (let n = 1; n <= 9; ++n) {
        if (m == 3 && n > 3) { break; }
        let temp = n;
        if (n <= 3) {
          roman_dist[`${n * Math.pow(10, m)}`] = '';
          while (temp--) {
            roman_dist[`${n * Math.pow(10, m)}`] += nume_roman[m][0]
          }

        } else if (n == 4) {
          roman_dist[`${n * Math.pow(10, m)}`] = nume_roman[m][0] + nume_roman[m][1]
        } else if (n >= 5 && n < 9) {
          temp = temp - 5
          roman_dist[`${n * Math.pow(10, m)}`] = nume_roman[m][1];
          while (temp--) {
            roman_dist[`${n * Math.pow(10, m)}`] += nume_roman[m][0]
          }
        } else if (n == 9) {
          roman_dist[`${n * Math.pow(10, m)}`] = nume_roman[m][0] + nume_roman[m + 1][0]
        }

      }
    }
  }
  translateToRoman();

  while (i) {
    temp_num = Math.pow(10, --i)
    part_num = ~~(num / temp_num) * temp_num;
    num = num - part_num;
    part_num && (str += roman_dist[`${part_num}`]);
  }
  return str;
};

// 思路， 先生成一个罗马数字字典，然后字典查找。 但这种先生成字典的方法视乎效率不太高。