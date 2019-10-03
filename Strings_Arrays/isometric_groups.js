
function iso_group(arr){
	let map ={}

	function convert(str){
		
		let word = ''
		let count = 1
		if(str.length === 0){
			return word
		}
		let prev = str[0]
		// this uses the fact that out of bound is undefined
		for(let i = 1; i <= str.length; i++){
			if(prev === str[i]){
				count++
			}else {
				word += count
				prev = str[i]
				count = 1
			}
		}
		return word
	}
	for(let i = 0; i < arr.length; i++){
		let word = arr[i]
		let key = convert(word)
		if(map[key] === undefined){
			map[key] = [word]
		}else {
			map[key].push(word)
		}
	}
	let result =[]
	for(let key in map){
		result.push(map[key])
	}
	return result
}

let arr = ['apple','apply','dog','cog','romi']

console.log(iso_group(arr))