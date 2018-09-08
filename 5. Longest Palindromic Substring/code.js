/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
    let isPalindrome = function(str) {
        for(let i = 0; i< str.length / 2; ++i) {
            if(str[i] != str[str.length - 1 - i]) {return false;}
        }
        return true;
    }
    let palindrome_str = ''
    for(let i = 0; i < s.length; ++i) {
        if(s.length - i <= palindrome_str.length) { break; }
        for(let j = palindrome_str.length+1; j<= s.length - i;++j) {
            sub_s = s.substr(i, j)
            if (isPalindrome(sub_s)) {
                palindrome_str = sub_s;
            }
               
        }
    }
    return palindrome_str;
};