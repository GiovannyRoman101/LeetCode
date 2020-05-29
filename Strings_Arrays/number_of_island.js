/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let num = 0
	if(grid.length === 0 || grid[0].length === 0){
		return num
	}

	let copy =[]
	for(let i = 0;i < grid.length; i++){
		copy.push([...grid[i]])
	}

	for(let i =0; i < copy.length; i++){
		for(let j = 0; j < copy[i].length; j++){
			if(copy[i][j] === '1'){
				num++
				function dfs(row,col){
					if(row < 0 || row >= copy.length || col < 0 || col >= copy[row].length){
						return
					}else if(copy[row][col] === '0'){
						return
					} else{
						copy[row][col] = '0'
						dfs(row - 1, col)
						dfs(row + 1, col)
						dfs(row, col - 1)
						dfs(row,col + 1)
					}
				}
				dfs(i,j)
			}
		}
	}

	return num
}

let map1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
] 

let map2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
]

console.log(numIslands(map2))