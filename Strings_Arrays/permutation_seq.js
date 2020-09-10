/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    if(n < 1){
		return ''
	}
	let seq = []
	for(let i =1; i <= n;i++ ){
		seq.push(i)
	}
	let result =[]
	function dfs(arr, str =''){
		if(result.length === k){
			return
		}
		if(arr.length === 0 && str !== ''){
			result.push(str)
		}else{
			for(let i =0; i < arr.length;i++){
				dfs([...arr.slice(0,i), ...arr.slice(i+1)], str + arr[i])
			}
		}
	}
	dfs(seq)
	return result[k-1]
};
console.log(getPermutation(3,3))