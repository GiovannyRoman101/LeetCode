/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0){
		return true
	}else if(t === null || s.length > t.length ){
		return false
	}else{
		let ptr = 0
		for(let i = 0; i < t.length; i++){
			if(ptr === s.length){
				return true
			}else if(s[ptr] === t[i]){
				ptr++
			}
		}
		if(ptr === s.length){
			return true
		}
		return false
	}
};