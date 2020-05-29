/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
	let results =[]
	let i = 1
	let currRes = []
	products.sort((a,b) =>{
		return a.localeCompare(b)
	})
	while(i <= searchWord.length){
		for(let j =0; j < products.length;j++){
			if(searchWord.slice(0,i) === products[j].slice(0,i)){
				if(currRes.length !== 3){
					currRes.push(products[j])
				}
			}
		}
		i++
		results.push(currRes)
		
		currRes =[]
	}
	return results
};

let products = ["mobile","mouse","moneypot","monitor","mousepad"]

console.log(suggestedProducts(products,'mouse'))