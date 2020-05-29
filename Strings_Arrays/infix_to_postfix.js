
// TODO: check better. maybe stack and combine like terms
function infixToPostfix(arr){
	let stack =[]
	if(arr.length ===0 || arr === null || arr === undefined){
		return ''
	}else{
		let prev = null
		for(let i =0; i < arr.length; i++){
			if(arr[i] !== '*' && arr[i] !== '/' && arr[i] !== '+' && arr[i] !== '-' ){
				stack.push(arr[i])
			}else{
				let right = stack.pop()
				let left = stack.pop()
				if(left === undefined || left === null || right === undefined || right === null){
					return 'Invalid String'
				}else{
					if(prev === null){
						prev = arr[i]
					}else if((prev === '-' ||prev === '+') && (arr[i] === '*' || arr[i] === '/')){
						stack.push(left + arr[i] +'('+right+')')
					}else{
						stack.push( left + arr[i] +right )
					}
				}
			}
			prev = arr[i]
		}
	}
	if(stack.length > 1){
		return 'Invalid String'
	}
	return stack.pop()
}
// 15*(9+y)/(x-3)
let arr1 = ['15','9','y','+','*','x','3','-','/']
console.log(infixToPostfix(arr1))
let arr2 = ['14','3','+','9','+']
console.log(infixToPostfix(arr2))
// let arr3 = []
// let arr4 = []
// let arr5 = []
// let arr6 = []