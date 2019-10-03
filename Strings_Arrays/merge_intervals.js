/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if(!intervals || intervals.length === 0){
		return []
	}
	intervals.sort((a,b)=>{
		return a[0]-b[0]
	})
	let res = [intervals[0]]
	for(let i = 1;i < intervals.length;i++){
		let start = intervals[i][0]
		let end = intervals[i][1]
		let start_res = res[res.length -1][0]
		let end_res = res[res.length -1][1]
		if(start <= end_res){
			res[res.length-1][1] = Math.max(end,end_res) 
		}
		else{
			res.push(intervals[i])
		}
	}
	return res
}

let inver = [[1,3],[2,6],[8,10],[15,18]]
let inver1 =[]
let inver2 = null
console.log(merge(inver2))