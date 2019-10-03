/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let numbers = {
		'0':[''],
		'1':[''],
		'2':['A','B','C'],
		'3':['D','E','F'],
		'4':['G','H','I'],
		'5':['J','K','L'],
		'6':['M','N','O'],
		'7':['P','Q','R','S'],
		'8':['T','U','V'],
		'9':['W','X','Y','Z']
	}
	let arr = []
	function helper(numbs, curr =''){
		if(numbs.length === 0 ){
			if(curr !== ''){
				arr.push(curr)
			}
			return
		}else{
			for(let letter of numbers[numbs[0]]){
				helper(numbs.slice(1,numbs.length), curr+ letter)
			}
		}
	}
	helper(digits)
	return arr

};
let digits = '12345'
console.log(letterCombinations(digits))