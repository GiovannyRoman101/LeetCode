/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s3.length !== (s1.length + s2.length)){
		return false
	}

	function backtracking(s3_index,s1_index,s2_index){
		if(s3_index === s3.length){
			return true
		}else if (s3[s3_index] === s1[s1_index] && s3[s3_index] === s2[s2_index]){
			return backtracking(s3_index +1, s1_index +1, s2_index) || backtracking(s3_index +1, s1_index, s2_index +1)
		}else if(s3[s3_index] === s1[s1_index]){
			return backtracking(s3_index +1, s1_index +1, s2_index) 
		}else if(s3[s3_index] === s2[s2_index]){
			return backtracking(s3_index +1, s1_index, s2_index +1) 
		}else {
			return false
		}
	}
	return backtracking(0,0,0)
}

console.log(isInterleave('aabcc','dbbca','aadbbcbcac'))
console.log(isInterleave('aabcc','dbbca','aadbbbaccc'))
console.log(isInterleave('','',''))
