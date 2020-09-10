/**
 * @param {string} str
 * @return {number}
 */
// solution one
var myAtoi = function(str) {
	const max = Math.pow(2,31)-1
	const min = Math.pow(-2,31)
	let num = 0
	const codeZero = 48
	const codeNine = 57
	

	for(let i = 0; i < str.length;i++){
		if(str[i] === ' '){
			continue
		}else if(str[i] === '-' ||str[i] === '+'|| (str.charCodeAt(i) >= codeZero && str.charCodeAt(i) <= codeNine)){
			num = parseInt(str.slice(i))
			break
		}else{
			return num
		}
	}
	if(Number.isNaN(num)){
		return 0
	}
	if(num > max){
		return max
	}else if(num < min){
		return min
	}else{
		return num
	}
};
function myAtoi1(str){
	const max = Math.pow(2,31)-1
	const min = Math.pow(-2,31)
	let result = parseInt(str)
	if(Number.isNaN(result)){
		return 0
	}else if (max < result){
		return max
	}else if (min > result){
		return min
	}else{
		return result
	}
}

console.log(myAtoi1('+2'))
console.log(myAtoi1('  -42'))
console.log(myAtoi1('4193 with words'))
console.log(myAtoi1('words and 987'))
console.log(myAtoi1('-91283472332'))