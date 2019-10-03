/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0){
		return true
	}
	let stack = []
	for(let i = 0; i < s.length; i++){
		if(s[i] === '(' || s[i] === '{' || s[i] === '['){
			stack.push(s[i])
		}else {
			let prev = stack.pop()
			if(prev === '(' && s[i] === ')'){
				continue
			} else if(prev === '{' && s[i] === '}'){
				continue
			}else if( prev === '[' && s[i] === ']'){
				continue
			} else {
				return false
			}
		}
	}
	if(stack.length !== 0){
		return false
	}
	return true
}

// console.log(isValid('(({}[)]))'))
console.log(isValid('['))