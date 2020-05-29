/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let profit = 0
	for(let i =1; i <prices.length; i++){
		if(prices[i] - prices[i-1] > 0){
			profit += prices[i] - prices[i-1]
		}
	}
	return profit
};

let arr1 = [7,1,5,3,6,4]
let arr2 = [1,2,3,4,5]
let arr3 = [7,6,4,3,1]

console.log(maxProfit(arr1))
console.log(maxProfit(arr2))
console.log(maxProfit(arr3))