/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let words = s.split(' ')
	
	return words.filter((item)=>{
		if(item.length !==0){
			return true
		}
		return false
	}).reverse().join(' ')
};

console.log(reverseWords("  hello world!  "))