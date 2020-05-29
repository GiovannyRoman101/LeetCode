/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, K) {
	let workers = []
	for(let i = 0; i < quality.length; i++){
		workers.push(new Worker(quality[i],wage[i]))
	}
	// sort workers by ratios from least to great
	workers.sort((a,b) =>{
		return a.ratio - b.ratio
	})
	let res = Infinity
	let sum = 0
	let pqueue =[]
	for(let i = 0; i < workers.length; i++){
		
		let worker = workers[i]
		// sum up the total work and add it to the priority queue
		// by quality from least to greatest
		sum += worker.quality
		let contain = false
		for(let j = 0; j < pqueue.length; j++){
			if(pqueue[j].quality < worker.quality){
				pqueue.splice(j,0,worker)
				contain = true
				break
			}
		}
		if(!contain){
			pqueue.push(worker)
		}
		// when you reach k workers, update pay and remove the first element
		if(pqueue.length === K){
			res = Math.min(res, sum * worker.ratio)
			sum -= pqueue.shift().quality
		}
	}
	return res
}

function Worker(quality, wage){
	this.quality = quality
	this.wage = wage
	this.ratio = (this.wage / this.quality)
}

console.log(mincostToHireWorkers([10,20,5],[70,50,30],2))
console.log(mincostToHireWorkers([3,1,10,10,1],[4,8,2,2,7],3))