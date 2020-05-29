/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
	let set = new Set()
	function backtracking(tiles, currWord =''){
		if(currWord.length !== 0){
			set.add(currWord)
		}
		for(let i = 0; i < tiles.length;i++){
			backtracking([...tiles.slice(0,i).concat(tiles.slice(i+1))],currWord + tiles[i])
		}
	}
	backtracking(tiles)
	return set.size
};

console.log(numTilePossibilities('AAABBC'))