/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1 === '' && word2 !== null){
		return word2.length
	}
	if(word2 === '' && word1 !== null){
		return word1.length
	}
	let dp =[]
	for(let i = 0; i <= word1.length; i++){
		dp.push([])
		
	}
	for(let i =0; i <= word1.length;i++){
		for(let j = 0; j <= word2.length; j++){
			if(i === 0){
				// if word 1 is an empty string
				dp[i][j] = j
			}else if(j === 0){
				// if word 2 is an empty string
				dp[i][j] = i 
			}else if(word1[i-1] === word2[j-1]){
				// if letter is the same perform no change
				dp[i][j] = dp[i-1][j-1]
			}else{
				// 
				dp[i][j] = 1+ Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j])
			}
		}
	}
	return dp[word1.length][word2.length]
}

console.log(minDistance('saturday','sunday'))