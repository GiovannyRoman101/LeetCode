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
	
}
