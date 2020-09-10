/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	let arr = []
    let i = 0; // individual row
    let j = 0; // individual col
    
    let top = 0;
    let left = 0;
    let right = n-1;
	let bot = n-1;
	
	let count = 1
    
	for(let row = 0; row < n; row++){
		arr.push([])
	}
	while(top <= bot && left <= right){

		i = left
		while(i <= right){
			arr[top][i] = count++
			i++
		}
		top++

		j = top
		while(j <= bot){
			arr[j][right] = count++
			j++
		}
		right--

		i = right
		while(i >= left){
			arr[bot][i] = count++
			i--
		}
		bot--

		j = bot
		while(j >= top){
			arr[j][left] = count++
			j--
		}
		left++
	}
	return arr

};

console.log(generateMatrix(3))