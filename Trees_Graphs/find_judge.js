var findJudge = function(N, trust) {
    let town = {}
    for(let i = 1; i <= N; i++){
        town[i] = []
	}
	for(let i = 0 ; i < trust.length; i++){
		town[trust[i][0]].push(trust[i][1])
	}
	let possible = []
	for(let key in town){
		if(town[key].length === 0){
			possible.push(key)
		}
	}
	if(possible.length !== 1 ){
		return -1
	}else {
		for(let key in town){
			if(key === possible[0]){
				continue
			}else if(!town[key].includes(Number(possible[0])) ){
				return -1
			}
		}
	}
	return possible[0]
    
};

let trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
console.log(findJudge(4,trust))