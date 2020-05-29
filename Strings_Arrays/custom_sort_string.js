/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
	let map = new Map()
	for(let i = 0 ; i < T.length; i ++){
		if(map.get(T[i]) === undefined){
			map.set(T[i], 0)
		}
		map.set(T[i], map.get(T[i])+1)
	}
	let str = ''
	for(let i = 0; i < S.length; i++){
		if(map.get(S[i]) !== undefined){
			str += getStr(S[i], map.get(S[i]))
			map.delete(S[i])
		}
	}
	for(let key of map.keys()){
		str += getStr(key, map.get(key))
	}
	return str
}

function getStr(letter,num){
	let str = ''
	for(let i = 0; i < num; i++){
		str += letter
	}
	return str
}

console.log(customSortString("cba","abcd"))