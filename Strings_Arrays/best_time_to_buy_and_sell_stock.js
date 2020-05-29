/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let max =0
	for(let i =0; i<prices.length;i++){
		for(let j = i+1; j< prices.length;j++){
			if(prices[j] - prices[i] > max){
				max = prices[j] - prices[i]
			}
		}
	}
	return max
};

let arr1 = [7,1,5,3,6,4]
let arr2 = [7,6,4,3,1]

console.log(maxProfit(arr1))
console.log(maxProfit(arr2))