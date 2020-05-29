/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */

// problem 1383
var maxPerformance = function (n, speed, efficiency, k) {
	let engineers = []
	for(let i = 0; i < n; i++){
		engineers.push(new Engineer(speed[i],efficiency[i]))
	}
	engineers.sort((a,b)=>{ return b.efficiency - a.efficiency})
	let maxP = - Infinity
	let pqueue = []
	let totalSpeed = 0
	for(let i = 0; i < n; i ++){
		let engineer = engineers[i]
		let contain = false
		totalSpeed += engineer.speed
		for(let j = 0; j < pqueue.length; j++){
			if(pqueue[j].speed > engineer.speed){
				pqueue.splice(j,0,engineer)
				contain = true
				break
			}
		}
		if(!contain){
			pqueue.push(engineer)
		}

		if(pqueue.length === k){
			
			maxP = Math.max(maxP, totalSpeed * engineer.efficiency)
			totalSpeed -= pqueue.shift().speed
		}
	}
	if(maxP > (Math.pow(10,9)+7)){
		return (Math.pow(10,9)+7)
	}
	return maxP

}

function Engineer(speed,efficiency){
	this.speed = speed
	this.efficiency = efficiency
}

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2))
console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3))
console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4))

// not sure how this is supppose to be 56
console.log(maxPerformance(3,[2,8,2],[2,7,1],2))
