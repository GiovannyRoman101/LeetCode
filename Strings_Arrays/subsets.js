/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// correct by want specific order
var subsets = function (nums) {
	let result = []
	result.push([])
	if (nums.length === 0) {
		return result
	}

	function permute(currNum, currSubset = []) {
		while (currNum.length !== 0) {
			currSubset.push(currNum.shift())
			result.push([...currSubset])
			permute([...currNum], [...currSubset])
			currSubset.pop()
		}
	}
	permute(nums)
	
	return result
}

console.log(subsets([1,2,3,4]))