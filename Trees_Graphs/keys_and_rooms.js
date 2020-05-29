/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
	let map = new Map()
	for(let i =0; i < rooms.length; i++){
		if(i === 0){
			map.set(i,true)
		}else{
			map.set(i,false)
		}
	}
	function travel(currRoom){
		let keys = rooms[currRoom]
		if(keys !== undefined){
			for(let i = 0; i < keys.length;i++){
				if(map.get(keys[i])=== false){
					map.set(keys[i],true)
					travel(keys[i])
				}
			}
		}
	}
	travel(0)
	for(let room of map.keys()){
		if(map.get(room) === false){
			return false
		}
	}
	return true
};

let rooms = [[1],[2],[3],[]]
let rooms2 = [[1,3],[3,0,1],[2],[0]]
let room3 = [[2,3],[],[2],[1,3,1]]

console.log(canVisitAllRooms(room3))