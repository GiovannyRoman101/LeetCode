/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b)=>{
		return a[1] - b[1]
	})
	let restr = []
	for(let i = 0; i < people.length;i++){
		let counter = 0
		let isAdded = false
		for(let j = 0 ; j < restr.length; j++){
			if(people[i][0] <= restr[j][0] && people[i][1] === counter){
				restr.splice(j,0,people[i])
				isAdded = true
				break
			}else if(people[i][0] <= restr[j][0]){
				counter++
			}
		}
		if(!isAdded){
			restr.push(people[i])
		}
	}
	return restr
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))