/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let copy = s.toLocaleLowerCase()
	let arr =[]
	for(let i = 0; i < copy.length; i++){
		if((copy.charCodeAt(i) >=97 && copy.charCodeAt(i) <= 122) ||
			(copy.charCodeAt(i) >= 48 && copy.charCodeAt(i) <= 57) ){
			arr.push(copy[i])
		}
	}
	let start = 0
	let end = arr.length-1
	while(start <= end){
		if(arr[start] !== arr[end]){
			return false
		}
		start++
		end--
	}
	return true
};

console.log(isPalindrome('0p'))