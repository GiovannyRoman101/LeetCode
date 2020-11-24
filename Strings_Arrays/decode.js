/**
 * @param {string} s
 * @return {number}
 */
// time exceeded
var numDecodings = function(s) {
	let count = 0

	function combinations(remaining, currstr = ''){
		if(remaining.length === 0 && currstr !== ''){
			count++
		}else{
			for(let i =0; i < 2 ;i++){
				let temp = parseInt(remaining.substr(0,i+1))
				if(0 < temp && temp < 27 && remaining[0] !== '0'){
					combinations(remaining.slice(i+1),currstr + temp)
					if(remaining.slice(i+1).length ===0){
						break
					}
				}
			}
		}
	}
	combinations(s)
	
	return count
};

var numDecodings1 = function(s) {
	let memo = new Map()
	let count = 0
	
}

let input1 = '12'
let input2 = '226'
let input3 = '10'
let input4 = '01'
console.log(numDecodings(input2))
// console.log(numDecodings(input2))