// given n pairs of parentheses, write a 
// function to generate all combinations
// of well-formed parentheses.


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let result = []
	function dfs(lparenthesis = 0,rparenthesis = 0, curr =''){
		if(lparenthesis === n && rparenthesis === n ){
			result.push(curr)
			return
		}else if (rparenthesis > lparenthesis){
			return
		}else{
			if(lparenthesis < n){
				dfs(lparenthesis+1,rparenthesis, curr+'(')
			}
			if(rparenthesis < n){
				dfs(lparenthesis, rparenthesis+1, curr+')')
			}
		}
	}

	dfs()
	return result
}



console.log(generateParenthesis(3))