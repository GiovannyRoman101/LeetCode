/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
	let count = 0
	for(let i = 0; i < s.length; i++){
		if(s.length -1 === i){
			count += s.charCodeAt(i) - 64
		}else{
			count += (s.charCodeAt(i) - 64)*Math.pow(26, s.length -1 -i)
		}
	}
	return count
};

let str1 = 'A'
let str2 ='AB'
let str3 = 'ZY'
let str4 = 'AAA'
console.log(titleToNumber(str1))
console.log(titleToNumber(str2))
console.log(titleToNumber(str3))
console.log(titleToNumber(str4))