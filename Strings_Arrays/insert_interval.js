/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if(intervals.length === 0){
		intervals.push(newInterval)
	}else{
		let left = 0
		let right = intervals.length-1
		while(left <= right){
			let mid = Math.floor((left+right)/2)
			if(newInterval[0] <= intervals[left][0]){
				intervals.splice(left,0, newInterval)
				break
			}else if(intervals[right][0] <= newInterval[0]){
				intervals.splice(right+1,0,newInterval)
				break
			}else if(intervals[mid][0] === newInterval[0]){
				intervals.splice(mid,0,newInterval)
				break
			}else if(intervals[mid][0] < newInterval[0]){
				left = mid+1
			}else{
				right = mid-1
			}
		}
	}
	intervals = merge(intervals)
	return intervals
}
function merge(arr){
	let sorted = []
	if(arr.length === 0){
		return sorted
	}else{
		sorted.push(arr.shift())
		while(arr.length !==0){
			let curr = sorted.pop()
			let next = arr.shift()
			if(curr[0] <= next[0] && next[0] <= curr[1] ){
				curr[0] = Math.min(curr[0],next[0])
				curr[1] = Math.max(curr[1],next[1])
				sorted.push(curr)
			}else{
				sorted.push(curr)
				sorted.push(next)
			}
		}
	}
	return sorted
}

console.log(insert([[1,3],[6,9]],[2,5]))
console.log(insert([[0,2],[3,9]],[6,8]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
// console.log(insert([], [2, 7]))
