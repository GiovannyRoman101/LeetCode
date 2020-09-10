/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	if(tokens === undefined || tokens.length === 0 ){
		return 0
	}
	let stack = []
	for(let i = 0; i < tokens.length;i++){
		if(tokens[i] !== '*' && tokens[i] !== '/' && tokens[i] !== '+' && tokens[i] !== '-'){
			stack.push(parseInt(tokens[i]))
		}else{
			let right = stack.pop()
			let left = stack.pop()
			if(left === undefined || right === undefined){
				return null
			}else if(tokens[i] === '*'){
				stack.push(left * right)
			}else if(tokens[i] === '/'){
				stack.push(Math.trunc(left / right))
			}else if(tokens[i] === '+'){
				stack.push(left + right)
			}else if(tokens[i] === '-'){
				stack.push(left - right)
			}else{
				return null
			}
		}
	}
	if(stack.length !== 1){
		return null
	}else{
		return stack.pop()
	}
}

console.log(evalRPN(["4","13","5","/","+"]))