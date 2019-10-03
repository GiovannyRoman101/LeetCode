
function rightpoint(){
	for(let i = 1; i <= 100; i++){
		if(i % 3 ===0 && i % 5 ===0){
			console.log('rightpoint')
		}else if(i %3 === 0){
			console.log('right')
		}else if(i % 5 === 0){
			console.log('point')
		}else{
			console.log(i)
		}
	}
}
rightpoint()