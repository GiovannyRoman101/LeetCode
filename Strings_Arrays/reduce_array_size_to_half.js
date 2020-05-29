/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let map = new Map()
	for(let i = 0; i < arr.length; i++){
		if(!map.has(arr[i])){
			map.set(arr[i], 0)
		}
		map.set(arr[i], map.get(arr[i])+1)
	}
	let sorted = [...map.entries()].sort((a,b)=>{
		return b[1]-a[1]
	})
	let elem = 0
	let currsum =0
	for(let [val, count] of sorted){
		elem++
		currsum +=count 
		if(currsum >= (Math.floor(arr.length /2))){
			return elem
		}
	}
	if(currsum >= (Math.floor(arr.length /2))){
		return elem
	}
	return 0
}

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))