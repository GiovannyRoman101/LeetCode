/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	if(amount < 0){
		return -1
	} else if(amount ===0){
		return 0
	}
    coins.sort((a,b)=>{
		return b-a
	})
	let total =0
	let currAmt = amount
	for(let coin of coins){
		if(currAmt < coin){
			continue
		}
		let temp = Math.floor(currAmt /coin)
		total += temp
		currAmt -= coin * temp
	}
	if(currAmt !== 0){
		return -1
	}
	return total
}

let coins = [1,2,5]
let coins1 = [2]
let coins3 = [186,419,83,408]

//console.log(coinChange(coins, 11))
console.log(coinChange(coins3, 6249))
//console.log(coinChange(coins, 100))