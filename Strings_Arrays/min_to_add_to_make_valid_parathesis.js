/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(str) {
	let stack = []
	for(let i = 0; i < str.length; i++){
		if(i === 0){
			stack.push(str[i])
		}else{
			let prev = stack.pop()
			if(prev === '(' && str[i] === ')'){
				continue
			}else{
				if(prev !== undefined){
					stack.push(prev)
				}
				stack.push(str[i])
			}
		}
	}
	return stack.length
};

let str1 = '())'
let str2 = '((('
let str3 = '()'
let str4 = '()))(('

// 1
console.log(minAddToMakeValid(str1))
// 3
console.log(minAddToMakeValid(str2))
// 0
console.log(minAddToMakeValid(str3))
// 4
console.log(minAddToMakeValid(str4))