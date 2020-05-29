/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	return mergeSort(A)
}

function mergeSort(arr){
	if(arr.length < 1){
		return arr
	}else if(arr.length === 1){
		arr[0] = Math.pow(arr[0],2)
		return arr
	}
	let mid = Math.floor(arr.length /2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left,right)
	
}

function merge(arr1,arr2){
	let arr = []
	while(arr1.length > 0 && arr2.length > 0){
		if(arr1[0] > arr2[0]){
			arr.push(arr2.shift())
		}else{
			arr.push(arr1.shift())
		}
	}
	if(arr1.length !== 0){
		arr.push(...arr1)
	}else if(arr2.length !==0){
		arr.push(...arr2)
	}
	return arr
}

console.log(sortedSquares([-4,-1,0,3,10]))