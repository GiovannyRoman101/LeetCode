// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

/**
 * 
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
	let result = ''
	for(let i = 0 ; i < s.length; i++){
		// for strings that are even or old
		for(let j = 0; j < 2; j++){
			let left = i
			let right = left +j
			while(s[left] && s[left] === s[right]){
				left--
				right++
			}
			if(right - left -1 > result.length){
				result = s.slice(left+1,right)
			}
		}
	}
	return result
};

console.log(longestPalindrome('babad'))