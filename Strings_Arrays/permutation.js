function permute(nums) {
    let result = []
    function helper(arr,start,end){
		if(start === end){
			result.push([...arr])
		}else{
			for(let i = start; i <= end; i++){
				let temp = arr[i]
				arr[i] = arr[start]
				arr[start] = temp
				helper(arr,start +1, end)
				temp = arr[i]
				arr[i] = arr[start]
				arr[start] = temp
			}
		}
	}
    helper(nums,0, nums.length-1)
    return result
}

let arr = [1, 2, 3]
console.log(permute(arr))
