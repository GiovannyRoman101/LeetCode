/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
	let inc = 0
	let dec = S.length
	let arr = []
	for(let i = 0; i < S.length; i++){
		if(S[i] === 'I'){
			arr.push(inc++)
		}else{
			arr.push(dec--)
		}
	}
	arr.push(inc)
	return arr
};