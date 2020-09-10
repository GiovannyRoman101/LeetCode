/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
	let left = 0
	let right = 0
	let vowelCount = 0
	let max = 0
	while(right < s.length){
		if(right < k){
			if(isVowel(s[right])){
				vowelCount++
			}
		}else{
			if(isVowel(s[right])){
				vowelCount++
			}
			if(isVowel(s[left])){
				vowelCount--
			}
			left++
		}
		right++
		if(max < vowelCount){
			max = vowelCount
		}
	}
	return max
};

function isVowel(letter){
	if(letter ==='a' || letter ==='e' || letter ==='i' || letter ==='o' || letter === 'u'){
		return true
	}
	return false
}

console.log(maxVowels("rhythms",4))